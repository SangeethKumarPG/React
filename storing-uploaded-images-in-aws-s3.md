# Storing Uploaded Images In The Cloud (AWS S3)

Storing uploaded files (or any other files that are generated at runtime) on the local filesystem is not a great idea — because those files will simply not be available reliably in a running Next.js application (especially in production / serverless deployments where the filesystem is ephemeral).

Instead, it's recommended that you store such files (e.g., uploaded images) via some cloud file storage — like **AWS S3**.

AWS S3 is a service provided by AWS which allows you to store and serve (depending on its configuration) files. You can get started with this service for free, but you should check out its [pricing page](https://aws.amazon.com/s3/pricing/) to avoid any unwanted surprises.

This guide explains how you can use AWS S3 to store uploaded user images and serve them on a Next.js website — for **any project and any AWS account**.

---

## 1) Create an AWS account

In order to use AWS S3, you need an AWS account. You can [create one here](https://aws.amazon.com/).

---

## 2) Create an S3 bucket

Once you've created an account (and logged in), navigate to the **S3 console** to create a so-called **"bucket"**.

"Buckets" are containers that can be used to store files (side note: you can store any files — not just images).

Every bucket must have a **globally unique name**, so you'll need to be creative. You could, for example, use a name like:

```
<your-name>-<your-project>-user-images
```

When creating the bucket, you can confirm all the default settings — the name is the only thing you need to set.

> Throughout this guide, replace `YOUR_BUCKET_NAME` with the bucket name you chose, and `YOUR_REGION` with the AWS region you created the bucket in (e.g., `us-east-1`).

---

## 3) Upload the dummy image files

Now that the bucket is created, you can already add some files to it — for example the dummy images that were previously stored locally in the `public/images` folder.

To do that, select your created bucket and click the **"Upload"** button. Then drag & drop those images into the box and confirm the upload.

Thereafter, all those images should be in the bucket.

---

## 4) Configure the bucket for serving the images

Now that you've uploaded those dummy images, it's time to configure the bucket so the images can be loaded from the Next.js website.

By default, this is **not** possible! S3 buckets are "locked down" and the files in them are secure & not accessible by anyone else.

For our purposes here, we must update the bucket settings to make sure the images can be viewed by everyone.

### Disable "Block all public access"

As a first step, click on the **"Permissions"** tab and **"Edit"** the **"Block public access"** setting.

Then, disable the **"Block all public access"** checkbox (and with it, all other checkboxes) and select **"Save Changes"**.

Type `confirm` into the confirmation overlay once it pops up.

### Add a Bucket Policy

Next (and finally), you must add a so-called **"Bucket Policy"**. That's an AWS-specific policy document that allows you to manage the permissions of the objects stored in the bucket.

You can add such a "Bucket Policy" right below the "Block all public access" area, still on the **"Permissions"** tab.

Click **"Edit"** and insert the following bucket policy into the box:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicRead",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:GetObject",
                "s3:GetObjectVersion"
            ],
            "Resource": [
                "arn:aws:s3:::YOUR_BUCKET_NAME/*"
            ]
        }
    ]
}
```

Replace `YOUR_BUCKET_NAME` with your bucket name.

Then, click **"Save Changes"**.

Now the bucket is configured to grant read access to all objects inside it to anyone who has a URL pointing to one of those objects.

> ⚠️ You should now, of course, **not** add any files into the bucket that you don't want to share with the world!

To test if everything works, click on one of the images you uploaded (in the bucket). Then click on the **"Object URL"** — if opening it works (and you can see the image), you've configured everything as needed.

---

## 5) Update the Next.js code to use those S3 images

Now that the images are stored + served via S3, it's time to also load them from there in your Next.js app.

As a first step, you can delete the `public/images` folder (so that an empty `public/` folder remains).

Now, if you also delete the `.next` folder in the Next.js project and then visit `localhost:3000/meals`, you should see a bunch of items without images.

To bring them back, edit your database seed/data. For example, update the `initdb.js` file: change all the `image` property values from:

```js
image: '/images/burger.jpg',
```

to:

```js
image: 'burger.jpg',
```

(and do that for all records).

Next, go to the component that renders the image (e.g., `components/meals/meal-item.js`) and update the `<Image>` `src`:

```jsx
<Image
  src={`https://YOUR_BUCKET_NAME.s3.YOUR_REGION.amazonaws.com/${image}`}
  alt={title}
  fill
/>
```

> Depending on your region, the S3 URL may take the form
> `https://YOUR_BUCKET_NAME.s3.amazonaws.com/...` or
> `https://YOUR_BUCKET_NAME.s3.YOUR_REGION.amazonaws.com/...`.
> Use the exact URL you saw when you clicked the "Object URL" during testing (without the file name at the end).

The new `src` value is a string that contains the S3 URL to your bucket objects. The actual image name that should be loaded is then dynamically inserted via `${image}`.

> **Note:** This will only work if the images stored in the S3 bucket have the names referenced in your data/seed file!

You should also update any detail page (e.g., `app/meals/[mealSlug]/page.js`) and make sure the image there is also fetched from S3:

```jsx
<Image
  src={`https://YOUR_BUCKET_NAME.s3.YOUR_REGION.amazonaws.com/${meal.image}`}
  alt={meal.title}
  fill
/>
```

Now, to reset the database data, delete your database file (e.g., the SQLite `meals.db` file) and re-run your seed script (e.g., `node initdb.js`) to re-initialize it (with the updated image values).

If you do that and then restart the development server (`npm run dev`), you'll notice that you now get an error when visiting the page:

```
Error: Invalid src prop (https://YOUR_BUCKET_NAME.s3.YOUR_REGION.amazonaws.com/burger.jpg)
on `next/image`, hostname "YOUR_BUCKET_NAME.s3.YOUR_REGION.amazonaws.com"
is not configured under images in your `next.config.js`
```

---

## 6) Allowing S3 as an image source

You get this error because, by default, Next.js does not allow external URLs when using the `<Image>` component. You explicitly have to allow such a URL.

That's done by editing the `next.config.js` file:

```js
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'YOUR_BUCKET_NAME.s3.YOUR_REGION.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
```

Use your own S3 hostname / bucket name.

This `remotePatterns` config allows this specific S3 URL as a valid source for images.

With the config file updated & saved, you should now be able to visit the page and see all those images again.

---

## 7) Storing uploaded images on S3

Now that we can see those dummy images again, it's finally time to also "forward" user-generated (i.e., uploaded) images to S3.

This can be done with the help of a package provided by AWS — the **`@aws-sdk/client-s3`** package. This package provides functionality that allows you to interact with S3 — e.g., to store files in a specific bucket.

Install that package via:

```bash
npm install @aws-sdk/client-s3
```

Then, go to the file where you handle saving data (e.g., `lib/meals.js`) and import the AWS S3 SDK at the top of the file:

```js
import { S3 } from '@aws-sdk/client-s3';
```

Next, initialize it (e.g., right above the line where the `db` object is created):

```js
const s3 = new S3({
  region: 'YOUR_REGION',
});

const db = sql('meals.db'); // <- this was already there!
```

Now, edit your save function and remove all code that was related to storing the image on the local file system. Instead, add this code:

```js
s3.putObject({
  Bucket: 'YOUR_BUCKET_NAME',
  Key: fileName,
  Body: Buffer.from(bufferedImage),
  ContentType: meal.image.type,
});
```

Also make sure to save the image filename under the record's image property:

```js
meal.image = fileName;
```

The final save function should look something like this:

```js
export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}.${extension}`;

  const bufferedImage = await meal.image.arrayBuffer();

  s3.putObject({
    Bucket: 'YOUR_BUCKET_NAME',
    Key: fileName,
    Body: Buffer.from(bufferedImage),
    ContentType: meal.image.type,
  });

  meal.image = fileName;

  db.prepare(
    `
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `
  ).run(meal);
}
```

Adapt the field names / SQL to match your own project.

---

## 8) Granting the Next.js backend AWS access permissions

Now there's just one last — yet very important — step: **granting your Next.js app S3 write permissions.**

We configured S3 to *serve* the bucket content to everyone. But we did **not** (and should not!) configure it to allow everyone to *write* to the bucket or change its contents.

But that's what our Next.js app (via the S3 AWS SDK) now tries to do when uploading!

To grant your app appropriate permissions, you must set up **AWS access keys** for your app.

This is done by adding a `.env.local` file to the root of your Next.js project. This file is automatically read by Next.js, and the environment variables configured in it are made available to the **backend** part of your app.

> Learn more about environment variables in Next.js:
> https://nextjs.org/docs/app/building-your-application/configuring/environment-variables

In this `.env.local` file, add two key-value pairs:

```env
AWS_ACCESS_KEY_ID=<your aws access key>
AWS_SECRET_ACCESS_KEY=<your aws secret access key>
```

The AWS S3 SDK automatically picks up these environment variables — you don't need to reference them manually in your code.

### Where to get the access keys

You get those access keys from inside the AWS console (in the browser):

1. Click on your account name (top-right corner of the AWS console).
2. Choose **"Security Credentials"**.
3. Scroll down to the **"Access Keys"** area and create a new access key.
4. Copy & paste the values into your `.env.local` file.

> ⚠️ **Never share these keys with anyone!** Don't commit them to Git or anything like that. Make sure `.env.local` is listed in your `.gitignore` (Next.js includes it by default).
>
> 🔒 **Best practice:** Rather than using your root account keys, create a dedicated **IAM user** with only the S3 permissions it needs (e.g., `s3:PutObject` on your specific bucket) and use that user's access keys.

Learn more about access keys here:
https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html

---

With all that done, you should finally be able to create new records, upload images, and see them on your page — **even in production!** Because now, the images are stored on S3.
