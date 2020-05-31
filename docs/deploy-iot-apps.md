# IoT Apps

One of the most interesting features of Ionoid.io platform is the very easy way
to deploy IoT apps on IoT devices. In just few clicks, you can deploy your app
on hundreds or thousands of devices.

Using the intuitive dashboard of Ionoid.io
platform, you can also deploy on a subset of the project devices, basing on,
say, their name or their current status (for example, deploy only on devices
with names matching `weather-station-*`, or devices with status `error` to fix a bug).

In addition to be able to deploy apps, you can also deploy update for these
apps from the Ionoid.io dashboard, and of course, you can rollback an app
version if any problem appears.

In the next sections, we consider that you have:

- [Created](docs/getting-started.md) an account on Ionoid.io
- [Created](docs/projects.md) at least one project
- [Registered](docs/register-a-device.md) at least one device on this project

If not, please follow the guidelines on the links above then return to this page.

## Deploy IoT Apps

To deploy an IoT app you have three options:

- [Deploy on a single device](#deploy-on-a-single-device)
- [Deploy on all devices of a project](#deploy-on-all-devices-of-a-project)
- [Deploy on a subset of devices of a
  project](#deploy-on-a-subset-of-devices-of-a-project)

### Deploy on a single device

- On the *project details page* containing the target device, click on the device
to go to the *device details page*.

- Click on the **&#xFE19;** button and choose
**Deploy app on this device** action:

-- GIF WHERE WE GO TO A DEVICE DETAILS PAGE, CLICK ON MORE ACTIONS, AND SELECT
ACTION DEPLOY APP ON THIS DEVICE --

- On the window that appears, you can optionally add/remove environment variables
for this app

- Paste a public accessible URL to your app, and click on the **Deploy** button

::: tip
If you have not yet an app on hand, you can test our **Hello World** test app,
for that, use [this public URL](https://storage.googleapis.com/public.opendevices.io/apps/arch/armv7/hello-world/hello-world-armv7-v0.1.tar) to deploy the version `v0.1`.
:::

After few seconds, you will receive realtime messages about the status and
progress of the app deployment on the device.

-- GIF WHERE WE PASTE A URL ON THE DEPLOY APP IN THE DEVICE DETAILS PAGE, AND
WAIT TO SEE REALTIME MESSAGES --

Once the app deployed on this device, you can see it listed on *the project app
list page* or on the *device app list page*:

-- GIF WHERE WE NAVIGATE TO THE PROJECT APP LIST PAGE --
-- GIF WHERE WE NAVIGATE TO THE DEVICE APP LIST PAGE --

### Deploy on all devices of a project

- On the *project details page* make sure that no device is selected. Click on
**&#xFE19;** button and choose **Deploy app on all devices** action:

-- GIF WHERE WE CLICK ON SELECT NONE TO MAKE SURE ALL DEVICES ARE UNSELECTED,
THEN WE CLICK ON MORE ACTIONS BUTTON, THEN WE CLICK ON DEPLOY APP ON ALL
DEVICES --

- On the window that appears, you can optionally add/remove environment variables
for this app.

- Paste a public accessible URL to your app, and click on the **Deploy** button

::: tip
If you have not yet an app on hand, you can test our **Hello World** test app,
for that, use [this public URL](https://storage.googleapis.com/public.opendevices.io/apps/arch/armv7/hello-world/hello-world-armv7-v0.1.tar) to deploy the version `v0.1`.
:::

After few seconds, you will receive realtime messages about the status and
progress of the app deployment on each device.

-- GIF WHERE WE PASTE A URL ON THE DEPLOY APP IN THE PROJECT DETAILS PAGE, AND
WAIT TO SEE REALTIME MESSAGES --

Once the app deployed on at least one device of the project, you can see it
listed on the project app list page.

-- GIF WHERE WE NAVIGATE TO THE PROJECT APP LIST PAGE --

### Deploy on a subset of devices of a project

- On the *project details page*, select the device(s) you want to deploy to:

::: warning
If you don't select any device, the deployment will concern all the devices of the
current project.
:::

- Click on the **&#xFE19;** button, and choose the **Deploy app** action

- Optionally, remove/add environment variables this app needs to properly work

- Paste a public accessible URL to your app, and click on the **Deploy** button

::: tip
If you have not yet an app on hand, you can test our **Hello World** test app,
for that, use [this public URL](https://storage.googleapis.com/public.opendevices.io/apps/arch/armv7/hello-world/hello-world-armv7-v0.1.tar) to deploy the version `v0.1`.
:::

-- GIF WHERE WE SELECT SOME DEVICES IN THE PROJECT DETAILS PAGE, THEN WE CLICK
ON DEPLOY ACTION, THEN WE PASTE A URL, THEN WE CLICK ON DEPLOY BUTTON --

After few seconds, you will receive realtime messages about the status and
progress of the app deployment on each device.

Once the app deployed on at least one device of the project, you can see it
listed on the project app list page.

-- GIF WHERE WE NAVIGATE TO THE PROJECT APP LIST PAGE --

## Update IoT Apps

You can easily update an already deployed app to a newer version, for that you
have three options:

- [Update on a single device](#update-on-a-single-device)
- [Update on all devices of a project](#update-on-all-devices-of-a-project)
- [Update on a subset of devices of a
  project](#update-on-a-subset-of-devices-of-a-project)

### Update on a single device

- First, navigate to the *app on the device details* page, for that, you can:

-- Either navigate to the *project app list* page, click on the target app to go to the
  *app on the project details* page, then click on the target device to go to the
  *app on device details* page:

-- GIF WHERE WE GO TO THE PROJECT APP LIST, THEN TO A PROJECT APP DETAILS PAGE,
THEN TO THE DEVICE APP DETAILS PAGE --

-- Or navigate to the *project device list* page, click on the target device to
  go to the *device details* page, then click on *Apps* on the left sidebar under
  the *Current device* menu to go to the *device app list* page, then click on
  the target app to go to the *app on device details* page:

-- GIF WHERE WE GO TO THE PROJECT DEVICE LIST, THEN TO A DEVICE, THEN TO ITS
APP LIST, THEN TO THE DEVICE APP DETAILS PAGE --

- Click on the **&#xFE19;** button, and choose **Update app on this
device**

- You will get the same window as in the first deploy step, however
with the previous public URL pasted. Follow the same steps as in the first
deploy process, and after few seconds, you will receive realtime messages about
the status and progress of the app deployment on this device.

::: tip
You can use the same public URL to deploy multiple versions of the same app.
This is why for convenience, the previous public URL has been pasted to
deployment field.
:::

### Update on all devices of a project

- Navigate to the *project app list* then click on the target app to go to the
  *app on the project details page*

- Click on the **&#xFE19;** button, then  click on the **Update app on all
  devices** button:

-- GIF WHERE WE GO TO THE PROJECT APPS LIST, THEN WE CLICK ON THE UPDATE APP ON
ALL DEVICES BUTTON --

- You will get the same window as in the first deploy step, however
with the previous public URL pasted. Follow the same steps as in the first
deploy process, and after few seconds, you will receive realtime messages about
the status and progress of the app deployment on devices of the project.

### Update on a subset of devices of a project

- Navigate to the *project app list* then click on the target app

- Select the devices you want to update app on

- Click on the **&#xFE19;** button, then click on the **Update app on selected
devices** button:

-- GIF WHERE WE GO TO THE PROJECT APPS LIST, THEN WE SELECT DEVICES,
THEN WE CLICK ON THE UPDATE APP BUTTON --

- You will get the same window as in the first deploy step, however
with the previous public URL pasted. Follow the same steps as in the first
deploy process, and after few seconds, you will receive realtime messages about
the status and progress of the app deployment on devices of the project.

## Rollback IoT Apps

If you deployed an IoT app, then discovered that it is buggy (on one or more
devices), do not panic! You can easily rollback the app version, for that you
have three options:

- [Rollback on a single device](#rollback-on-a-single-device)
- [Rollback on all devices of a project](#rollback-on-all-devices-of-a-project)
- [Rollback on a subset of devices of a
  project](#rollback-on-a-subset-of-devices-of-a-project)

### Rollback on a single device

- First, navigate to the *app on the device details* page, for that, you can:

-- Either navigate to the *project app list* page, click on the target app to go to the
  *app on the project details* page, then click on the target device to go to the
  *app on device details* page:

-- GIF WHERE WE GO TO THE PROJECT APP LIST, THEN TO A PROJECT APP DETAILS PAGE,
THEN TO THE DEVICE APP DETAILS PAGE --

-- Or navigate to the *project device list* page, click on the target device to
  go to the *device details* page, then click on *Apps* on the left sidebar under
  the *Current device* menu to go to the *device app list* page, then click on
  the target app to go to the *app on device details* page:

-- GIF WHERE WE GO TO THE PROJECT DEVICE LIST, THEN TO A DEVICE, THEN TO ITS
APP LIST, THEN TO THE DEVICE APP DETAILS PAGE --

- On the top you can check what is the current version, and what is the
  previous version

- Click on the **&#xFE19;** button, and choose **Rollback app on this
device**

- Confirm by clicking on the **Rollback** button on the confirmation window

- After few seconds, you will receive realtime messages about the rollback
  process on the device

-- GIF WHERE WE CLICK ON THE ROLLBACK ACTION ON THE APP PER DEVICE DETAILS
PAGE, THEN WE SEE REALTIME MESSAGES --

### Rollback on all devices of a project

- Navigate to the *project app list* then click on the target app to go to the
  *app on the project details page*

- Make sure that no device is selected:

- Click on the **&#xFE19;** button, then  click on the **Rollback app on all
  devices** button:

-- GIF WHERE WE GO TO THE PROJECT APPS LIST, WE UNSELECT ALL DEVICES,
THEN WE CLICK ON THE ROLLBACK APP ON ALL DEVICES BUTTON --

- Confirm by clicking on the **Rollback** button on the confirmation window

- After few seconds, you will receive realtime messages about the rollback
  process on the device

-- GIF WHERE WE CLICK ON THE ROLLBACK ACTION ON THE APP PER DEVICE DETAILS
PAGE, THEN WE SEE REALTIME MESSAGES --

### Rollback on a subset of devices of a project

- Navigate to the *project app list* then click on the target app

- Select the devices you want to update app on

- Click on the **&#xFE19;** button, then click on the **Rollback app on
  selected devices** button:

-- GIF WHERE WE GO TO THE PROJECT APPS LIST, THEN WE SELECT DEVICES,
THEN WE CLICK ON THE ROLLBACK APP BUTTON --

- Confirm by clicking on the **Rollback** button on the confirmation window

- After few seconds, you will receive realtime messages about the rollback
  process on the selected devices

-- GIF WHERE WE CLICK ON THE ROLLBACK ACTION ON THE APP PER PROJECT DETAILS
PAGE, THEN WE SEE REALTIME MESSAGES --

## Delete IoT Apps

## More Actions on IoT Apps
