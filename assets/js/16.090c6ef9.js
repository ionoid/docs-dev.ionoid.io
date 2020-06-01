(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{362:function(e,t,o){"use strict";o.r(t);var a=o(44),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"projects"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#projects"}},[e._v("#")]),e._v(" Projects")]),e._v(" "),o("p",[e._v("Ionoid.io is structured as projects and devices belonging to these projects. To\nadd a device and be able to manage it, you first need to create a project.")]),e._v(" "),o("h2",{attrs:{id:"create-a-project"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#create-a-project"}},[e._v("#")]),e._v(" Create a Project")]),e._v(" "),o("ul",[o("li",[e._v("After signin in, click on "),o("a",{attrs:{href:e.$frontmatter.dashboardUrl+"/projects/new",target:"_blank"}},[e._v("Create new project")])])]),e._v(" "),o("p",[o("img",{attrs:{src:"/steps/click_on_create_project_button.gif",alt:"Click on Create Project Button"}})]),e._v(" "),o("ul",[o("li",[e._v("Choose your target board by clicking on it (see "),o("RouterLink",{attrs:{to:"/docs/supported-boards-and-os.html"}},[e._v("Supported Boards and\nOS")]),e._v(")")],1)]),e._v(" "),o("p",[o("img",{attrs:{src:"/steps/choose_board.gif",alt:"Choose Board"}})]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),o("p",[e._v("You can mix different boards and architectures, but you have to make sure to\nnot break your fleet by deploying apps built for other architectures\n(see "),o("RouterLink",{attrs:{to:"/"}},[e._v("Deploying Apps")]),e._v("). Otherwise you can lock your project to the selected\narchitecture, devices registered into the project must have same architecture,\notherwise they will be blocked and will not show up in the project,\nunless you unlock the project architecture.")],1)]),e._v(" "),o("ul",[o("li",[e._v("Finish the project creation with informations related to your project, then\nclick on the "),o("strong",[e._v("Create")]),e._v(" button")])]),e._v(" "),o("p",[o("img",{attrs:{src:"/steps/finish_create_project.gif",alt:"Create Project"}})]),e._v(" "),o("p",[e._v("Now that the project has been created, you can start\n"),o("a",{attrs:{href:"/docs/register-a-device.html",target:"_blank"}},[e._v("adding devices")]),e._v(" to this\nproject. Each device will have a configuration data consisting of:")]),e._v(" "),o("ul",[o("li",[e._v("Name of the device (optional)")]),e._v(" "),o("li",[e._v("Runing OS image")]),e._v(" "),o("li",[e._v("DNS and NTP servers")]),e._v(" "),o("li",[e._v("WiFi network(s) needed for connection (optional)")]),e._v(" "),o("li",[e._v("Cellular network(s) needed for connection/communication (optional)")]),e._v(" "),o("li",[e._v("Environment variables used by apps that will be deployed on this device\n(optional)")])]),e._v(" "),o("p",[e._v("This configuration can be set directly into the project, so as not to repeat\nthe process for each device that we add to the project. Check out the next\nsection to learn how.")]),e._v(" "),o("h2",{attrs:{id:"configure-the-project"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configure-the-project"}},[e._v("#")]),e._v(" Configure the Project")]),e._v(" "),o("p",[e._v("A project has a configuration that will be shared across all its devices. It\nconsists of:")]),e._v(" "),o("h3",{attrs:{id:"project-general-informations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#project-general-informations"}},[e._v("#")]),e._v(" Project General Informations")]),e._v(" "),o("p",[e._v("You can set the project name, its segment and the organization to which it\nbelongs.")]),e._v(" "),o("h3",{attrs:{id:"default-project-board"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#default-project-board"}},[e._v("#")]),e._v(" Default Project Board")]),e._v(" "),o("p",[e._v("Here you can change the default board that you set the first time you created the\nproject. You can also reorder the supported operating systems for the selected\nboard, the first operating system will be the default one that will be\ninstalled on devices when adding them to the project.")]),e._v(" "),o("p",[o("img",{attrs:{src:"/steps/reorder_supported_os.png",alt:"Reorder Supported OS"}})]),e._v(" "),o("h3",{attrs:{id:"monitoring-and-notifications"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#monitoring-and-notifications"}},[e._v("#")]),e._v(" Monitoring and Notifications")]),e._v(" "),o("p",[e._v("Future feature that will be used to receive notifications about events on\ndevices directly on "),o("a",{attrs:{href:"https://slack.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Slack"),o("OutboundLink")],1),e._v(", or via a custom\n"),o("a",{attrs:{href:"https://wikipedia.org/wiki/Webhook",target:"_blank",rel:"noopener noreferrer"}},[e._v("webhook"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"project-parameters"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#project-parameters"}},[e._v("#")]),e._v(" Project Parameters")]),e._v(" "),o("p",[e._v("Used only to display the project ID and the API key used for devices (not\neditable).")]),e._v(" "),o("h3",{attrs:{id:"general-settings"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#general-settings"}},[e._v("#")]),e._v(" General Settings")]),e._v(" "),o("p",[e._v("You can change the default\n"),o("a",{attrs:{href:"https://developers.google.com/speed/public-dns",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google DNS"),o("OutboundLink")],1),e._v(" and\n"),o("a",{attrs:{href:"https://developers.google.com/time",target:"_blank",rel:"noopener noreferrer"}},[e._v("NTP"),o("OutboundLink")],1),e._v(" servers that will be used by devices.")]),e._v(" "),o("h3",{attrs:{id:"advanced-settings"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#advanced-settings"}},[e._v("#")]),e._v(" Advanced Settings")]),e._v(" "),o("h4",{attrs:{id:"wifi-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#wifi-configuration"}},[e._v("#")]),e._v(" WiFi Configuration")]),e._v(" "),o("p",[e._v("You can add up to 5 WiFi networks by clicking on "),o("strong",[e._v("Add a WiFi network")]),e._v(", for each\nnetwork you can set:")]),e._v(" "),o("ul",[o("li",[e._v("The network ID (SSID) (required)")]),e._v(" "),o("li",[e._v("The network visibility (default to 'not hidden')")]),e._v(" "),o("li",[e._v("The network security mode (default to 'No security')")]),e._v(" "),o("li",[e._v("The network password (required unless the security mode is set to 'No\nsecurity')")]),e._v(" "),o("li",[e._v("The network priority: networks with higher priority will be preferred. Default\nis 0. The higher number means higher priority")])]),e._v(" "),o("p",[o("img",{attrs:{src:"/steps/add_wifi_network.gif",alt:"Add a WiFi Network"}})]),e._v(" "),o("p",[e._v("You can also add a fallback WiFi network by clicking on "),o("strong",[e._v("Add a fallback WiFi\nnetwork")]),e._v(", this network will be used in case all other networks are unavailable.")]),e._v(" "),o("h4",{attrs:{id:"cellular-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cellular-configuration"}},[e._v("#")]),e._v(" Cellular Configuration")]),e._v(" "),o("p",[e._v("You can add up to 2 cellular networks, for each network you have to specify in\norder:")]),e._v(" "),o("ul",[o("li",[e._v("The country to which the cellular network belongs")]),e._v(" "),o("li",[e._v("The network ID (generally the provider name)")]),e._v(" "),o("li",[e._v("The APN used for this network ID")])]),e._v(" "),o("p",[e._v("Once you choosed the APN, fields 'Plan' and 'Usage' will be filled with the\ncorresponding data. Use this data to confirm that APN you choosed is really the\none you are aiming to use.")]),e._v(" "),o("p",[o("img",{attrs:{src:"/steps/add_cellular_network.gif",alt:"Add a Cellular Network"}})]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),o("p",[e._v("Selecting an incorrect plan may result in billing issues for your account or\nprevent connectivity.")])]),e._v(" "),o("h4",{attrs:{id:"boot-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#boot-configuration"}},[e._v("#")]),e._v(" Boot Configuration")]),e._v(" "),o("p",[e._v("Here you can specify the kernel boot options.")]),e._v(" "),o("h3",{attrs:{id:"project-environment-variables"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#project-environment-variables"}},[e._v("#")]),e._v(" Project Environment Variables")]),e._v(" "),o("p",[e._v("Deployed apps on devices can access these environment variables, so that you\ncan deploy apps without hardcoding some values that can subject to\nmodifications in the future.")]),e._v(" "),o("p",[e._v("This can be very handy when it comes to modify a\nvariable, for example an endpoint url, used in 10 apps deployed across 200\ndevices. Using environment variables, it is as simple as editing a single\nvariable on dashboard, saving it, then clicking on a button to deploy new\nconfiguration to all devices of the project.")]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),o("p",[e._v("Please note that after editing the project settings, only newly added devices\nwill inherite of these settings. To make the already deployed devices also\ninherite of these settings, you have to "),o("em",[e._v("deploy the project settings")]),e._v(" by\nclicking on the "),o("strong",[e._v("Deploy settings")]),e._v(" button that is present on the project details\nmain page:")]),e._v(" "),o("p",[o("img",{attrs:{src:"/steps/redeploy_project_settings.png",alt:"Redeploy Project Settings"}})]),e._v(" "),o("p",[e._v("Anyway, a reminder will be displayed each time you save the project settings:")]),e._v(" "),o("p",[o("img",{attrs:{src:"/steps/redeploy_project_settings_reminder.gif",alt:"Redeploy Project Settings Reminder"}})])]),e._v(" "),o("h2",{attrs:{id:"add-a-device-to-the-project"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#add-a-device-to-the-project"}},[e._v("#")]),e._v(" Add a Device to the Project")]),e._v(" "),o("p",[e._v("See the "),o("RouterLink",{attrs:{to:"/docs/devices.html"}},[e._v("next section")]),e._v(".")],1),e._v(" "),o("h2",{attrs:{id:"consult-the-actions-history"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#consult-the-actions-history"}},[e._v("#")]),e._v(" Consult the Actions History")]),e._v(" "),o("p",[e._v("You can check the last actions that have been performed on the project by\nclicking on the "),o("strong",[e._v("ACTIONS HISTORY")]),e._v(" tab:")]),e._v(" "),o("p",[o("img",{attrs:{src:"/steps/actions_history.png",alt:"Actions History"}})]),e._v(" "),o("h2",{attrs:{id:"delete-a-project"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#delete-a-project"}},[e._v("#")]),e._v(" Delete a Project")]),e._v(" "),o("p",[e._v("You can delete a project by opening the 'SETTINGS' tab on the project details\nmain page, then by clicking on the "),o("strong",[e._v("Delete this project")]),e._v(" button, and confirming\nby typing the project name:")]),e._v(" "),o("p",[o("img",{attrs:{src:"/steps/delete_a_project.gif",alt:"Delete a Project"}})]),e._v(" "),o("div",{staticClass:"custom-block danger"},[o("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),o("p",[e._v("Please note thay by deleting a project, you understand that all devices\nbelonging to this project, all apps deployed on these devices, as well as the\nproject configuration will be permanently deleted from the Ionoid.io dashboard.")])]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Have Questions?")]),e._v(" "),o("p",[e._v("We're always happy to help with IoT projects or other questions you might have!\nCheck our "),o("a",{attrs:{href:"https://docs.ionoid.io/#/",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentation"),o("OutboundLink")],1),e._v(", contact\nsupport "),o("a",{attrs:{href:"mailto:support@ionoid.io"}},[e._v("support@ionoid.io")]),e._v(", or connect with our sales team: sales@opendevices.io.\nYou can also chat live with other developers in  "),o("a",{attrs:{href:"https://ionoidcommunity.slack.com/join/shared_invite/enQtODAzODgwOTIyMDY4LWExNWVmMDJhMDE2YWYyMjE3N2FlOGNlZjM4NDlmYmM5MmNhYWY1ZTZmOWMwYTYxYTMxNTQzODYzYmRmODMzOWI",target:"_blank",rel:"noopener noreferrer"}},[e._v("#slack"),o("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);