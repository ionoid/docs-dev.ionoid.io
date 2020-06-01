(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{353:function(e,t,s){"use strict";s.r(t);var a=s(44),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"debug-iot-devices"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#debug-iot-devices"}},[e._v("#")]),e._v(" Debug IoT Devices")]),e._v(" "),s("p",[e._v("To Debug your Device first login into your "),s("a",{attrs:{href:"https://dashboard.ionoid.io/login",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ionoid IoT Account"),s("OutboundLink")],1),e._v("\nand locate your Device.")]),e._v(" "),s("h2",{attrs:{id:"_1-device-information"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-device-information"}},[e._v("#")]),e._v(" 1. Device Information")]),e._v(" "),s("p",[e._v("Go to your Device details page and lookup for the following information:")]),e._v(" "),s("ul",[s("li",[s("p",[s("code",[e._v("Status and Last Time Seen")])])]),e._v(" "),s("li",[s("p",[s("code",[e._v("Device Operating System Versions")])])]),e._v(" "),s("li",[s("p",[s("code",[e._v("Device SealOS Manager Version")])])]),e._v(" "),s("li",[s("p",[s("code",[e._v("Device Systemd Version")])])]),e._v(" "),s("li",[s("p",[s("code",[e._v("Device Docker Version")])])])]),e._v(" "),s("h2",{attrs:{id:"_2-locate-device"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-locate-device"}},[e._v("#")]),e._v(" 2. Locate Device")]),e._v(" "),s("h3",{attrs:{id:"_2-1-via-dashboard"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-via-dashboard"}},[e._v("#")]),e._v(" 2.1. Via Dashboard")]),e._v(" "),s("p",[e._v("If you want to troubleshoot your device with "),s("code",[e._v("ssh")]),e._v(", then continue\nreading this section, otherwise skip to "),s("code",[e._v("Connect to Device Via Other ways")]),e._v(" section.")]),e._v(" "),s("p",[e._v("If you are on Windows, please install first "),s("a",{attrs:{href:"https://www.putty.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Putty\nClient"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("Locate Device "),s("code",[e._v("Network Interfaces")]),e._v(" and "),s("code",[e._v("IP Addresses")]),e._v(" section\ninside the Device Page on Dashboard and note the "),s("code",[e._v("IP ADDRESS")]),e._v(" that you\nwill use to "),s("code",[e._v("ssh")]),e._v(" into Device. Make sure you are on the same network as\nthe device. You may also try to see the Wi-Fi networks that this device\nis connected to, in the "),s("code",[e._v("Connected Network Section")]),e._v(".")]),e._v(" "),s("p",[s("strong",[e._v("The follow is a beta feature not available to all accounts:")]),e._v("\nTry to see if you can "),s("code",[e._v("ssh")]),e._v(" into the Device from the "),s("a",{attrs:{href:"https://dashboard.ionoid.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ionoid IoT\nDashboard"),s("OutboundLink")],1),e._v(" or use the "),s("code",[e._v("Public Device URL")]),e._v(" if\navailable and "),s("code",[e._v("ssh")]),e._v(" into that "),s("code",[e._v("IP Address")]),e._v(".")]),e._v(" "),s("p",[e._v("If you were able to find the device local "),s("code",[e._v("IP Address")]),e._v(" go to the next\nsection. Otherwise continue reading next section locate "),s("code",[e._v("Via Network Scan")]),e._v(".")]),e._v(" "),s("h3",{attrs:{id:"_2-2-via-network-scan"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-via-network-scan"}},[e._v("#")]),e._v(" 2.2. Via Network Scan")]),e._v(" "),s("p",[s("strong",[e._v("TODO")])]),e._v(" "),s("h2",{attrs:{id:"_3-connect-to-device"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-connect-to-device"}},[e._v("#")]),e._v(" 3. Connect to Device")]),e._v(" "),s("h3",{attrs:{id:"_3-1-via-ssh-network"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-via-ssh-network"}},[e._v("#")]),e._v(" 3.1. Via SSH Network")]),e._v(" "),s("p",[e._v("Connect to your device via "),s("code",[e._v("ssh")]),e._v(".")]),e._v(" "),s("p",[e._v("First locate last known available users to the system. In your device\npage")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Replace "),s("code",[e._v("$USER")]),e._v(" with a valid user from your Device, usually either "),s("code",[e._v("root")]),e._v(" or another user that you did create.")])]),e._v(" "),s("li",[s("p",[e._v("Replace "),s("code",[e._v("$IP_ADDRESS_OF_DEVICE")]),e._v(" with the IP Address of your device")])])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ssh")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$USER")]),e._v("@"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$IP_ADDRESS_OF_DEVICE")]),e._v("\n")])])]),s("p",[e._v("Provide the "),s("code",[e._v("$USER")]),e._v(" password and you should be in if everything was\nright and if the device is still up and able to handle "),s("code",[e._v("ssh")]),e._v(".")]),e._v(" "),s("h3",{attrs:{id:"_3-2-via-serial-communication"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-via-serial-communication"}},[e._v("#")]),e._v(" 3.2. Via Serial Communication")]),e._v(" "),s("h4",{attrs:{id:"_3-2-1-raspbian-serial-communication"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-raspbian-serial-communication"}},[e._v("#")]),e._v(" 3.2.1. Raspbian Serial Communication")]),e._v(" "),s("p",[e._v("If you are using Raspbian as an operating system, please follow these instructions.")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("On your host or working station, install minicom or any other serial communication program")])]),e._v(" "),s("li",[s("p",[e._v("Add your current user to the dialout group to be able to open the serial port")])])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("usermod")]),e._v(" -a -G dialout "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$USER")]),e._v("\n")])])]),s("ul",[s("li",[e._v("On the Micro SD card where you have flushed Raspbian, update the Linux "),s("code",[e._v("/boot/cmdline.txt")]),e._v(" file on the "),s("code",[e._v("boot")]),e._v(" partition, add the following:")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("console=serial0,115200 console=tty1\n")])])]),s("ul",[s("li",[e._v("On same "),s("code",[e._v("boot")]),e._v(" partition of the Micro SD card partition, enable UART console during boot, add the following to the end of "),s("code",[e._v("/boot/config.txt")]),e._v(" file:")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("enable_uart=1\n")])])]),s("ul",[s("li",[e._v("On the "),s("code",[e._v("root")]),e._v(" partition of your Micro SD card, enable getty on serial line by adding the following to the "),s("code",[e._v("/root/etc/inittab")]),e._v(" file:")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("T0:23:respawn:/sbin/getty -L ttyS0 115200 vt100\n")])])]),s("p",[e._v("The above has been verified on "),s("code",[e._v("Raspbian")]),e._v(" distribution.")]),e._v(" "),s("ul",[s("li",[e._v("Finally boot the Raspberry Pi and use minicom from your working station to connect to it:")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ minicom -b "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("115200")]),e._v(" -o -D /dev/ttyUSB0\n")])])]),s("ul",[s("li",[e._v("On your host or working station, some types of USB serial adapter may appear as "),s("code",[e._v("/dev/ttyACM0")]),e._v(", if so use:")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ minicom -b "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("115200")]),e._v(" -o -D /dev/ttyACM0\n")])])]),s("p",[e._v("References:\n"),s("a",{attrs:{href:"https://elinux.org/RPi_Serial_Connection",target:"_blank",rel:"noopener noreferrer"}},[e._v("Raspberry Pi Serial Connection"),s("OutboundLink")],1)]),e._v(" "),s("h2",{attrs:{id:"_4-troubleshooting-iot-device"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-troubleshooting-iot-device"}},[e._v("#")]),e._v(" 4. Troubleshooting IoT Device")]),e._v(" "),s("p",[e._v("Assuming you successfully "),s("code",[e._v("logged-in")]),e._v(" into your device, information about status, services and Apps can be found using the "),s("code",[e._v("systemctl")]),e._v(" utility.")]),e._v(" "),s("h3",{attrs:{id:"_4-1-troubleshooting-system-status"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-troubleshooting-system-status"}},[e._v("#")]),e._v(" 4.1 Troubleshooting System status")]),e._v(" "),s("ul",[s("li",[e._v("To get the overall status of the Device:")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl status\n")])])]),s("p",[s("strong",[e._v("Important: if you are logged in as root, no need to prefix commands\nwith sudo")])]),e._v(" "),s("h3",{attrs:{id:"_4-2-troubleshooting-services-and-apps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-troubleshooting-services-and-apps"}},[e._v("#")]),e._v(" 4.2 Troubleshooting Services and Apps")]),e._v(" "),s("ul",[s("li",[e._v("To get the list of failed Services on the Device:")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl --failed\n")])])]),s("ul",[s("li",[e._v("To get the status of Services or Apps, use the "),s("code",[e._v("status")]),e._v(" operation:\nExample get status of "),s("code",[e._v("systemd-journald")]),e._v(" service:")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl status systemd-journald\n")])])]),s("ul",[s("li",[e._v("To get the status of ionoid.io SealOS managers, check the following services:\nStatus of Main manager:")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl status sealos-manager\n")])])]),s("p",[e._v("Status of manager that executes and performs actions:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl status sealos-manager-actions\n")])])]),s("ul",[s("li",[e._v("To see if ionoid.io sealos manager boot setup succeeded:")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl status sealos-boot-setup\n")])])]),s("p",[e._v("You should be able to read in the output:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Main PID: 52 (code=exited, status=0/SUCCESS)\n")])])]),s("p",[e._v("If no then something went wrong during initial ionoid.io sealos manager\nboot setup.")]),e._v(" "),s("h3",{attrs:{id:"_4-3-troubleshooting-iot-apps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-troubleshooting-iot-apps"}},[e._v("#")]),e._v(" 4.3 Troubleshooting IoT Apps:")]),e._v(" "),s("p",[e._v("If you have deployed Apps using the native format "),s("code",[e._v("tar")]),e._v(", "),s("code",[e._v("zip")]),e._v(" or\nanything that is not a "),s("code",[e._v("Docker Container/App")]),e._v(", then just replace "),s("code",[e._v("$MYAPP")]),e._v(" with the name\nof your App:")]),e._v(" "),s("ul",[s("li",[e._v("Get Status of an App:")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl status "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$MYAPP")]),e._v("\n")])])]),s("ul",[s("li",[e._v("Get log entries of an App:")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" journalctl -b -u "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$MYAPP")]),e._v("\n")])])]),s("h3",{attrs:{id:"_4-4-troubleshooting-docker-iot-apps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-troubleshooting-docker-iot-apps"}},[e._v("#")]),e._v(" 4.4 Troubleshooting Docker IoT Apps:")]),e._v(" "),s("p",[e._v("If you have deployed Docker Containers or Apps then you can use the "),s("code",[e._v("Docker")]),e._v(" tools.")]),e._v(" "),s("p",[s("strong",[e._v("If docker commands do not work, run them with sudo")])]),e._v(" "),s("ul",[s("li",[e._v("List All running docker Apps and containers:")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("docker "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ps")]),e._v("\n")])])]),s("p",[e._v("or if you need permissions:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" docker "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ps")]),e._v("\n")])])]),s("h3",{attrs:{id:"_4-5-inspecting-device-logs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-inspecting-device-logs"}},[e._v("#")]),e._v(" 4.5 Inspecting Device Logs")]),e._v(" "),s("p",[e._v("Information about Device services and Apps logs can be found using the "),s("code",[e._v("journalctl")]),e._v("\nwhich is part of\n"),s("a",{attrs:{href:"https://www.freedesktop.org/software/systemd/man/systemd-journald.service.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemd-journald"),s("OutboundLink")],1),e._v(", it only handles current boot logs as they are stored in a volatile way below "),s("code",[e._v("/run/log/journal/")]),e._v(" ; and they are cleaned at reboot.")]),e._v(" "),s("p",[e._v("The default system logger is "),s("a",{attrs:{href:"https://www.rsyslog.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("rsyslog"),s("OutboundLink")],1),e._v(", to inspect the persistent logs, try to locate files under "),s("code",[e._v("/var/log/")]),e._v(" directory.")]),e._v(" "),s("h4",{attrs:{id:"_4-5-1-kernel-logs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-1-kernel-logs"}},[e._v("#")]),e._v(" 4.5.1 Kernel logs")]),e._v(" "),s("ul",[s("li",[e._v("To get the kernel logs use "),s("code",[e._v("dmesg")]),e._v(", the following asks for the last\n"),s("code",[e._v("100 log entries")]),e._v(":")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("dmesg")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("tail")]),e._v(" -n "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v("\n")])])]),s("h4",{attrs:{id:"_4-5-2-system-logs-with-rsyslog"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-2-system-logs-with-rsyslog"}},[e._v("#")]),e._v(" 4.5.2 System logs with rsyslog")]),e._v(" "),s("p",[e._v("For further documentation on "),s("a",{attrs:{href:"https://www.rsyslog.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("rsyslog"),s("OutboundLink")],1),e._v(" see: "),s("a",{attrs:{href:"https://www.rsyslog.com/category/guides-for-rsyslog/",target:"_blank",rel:"noopener noreferrer"}},[e._v("rsyslog\nguides"),s("OutboundLink")],1)]),e._v(" "),s("ul",[s("li",[e._v("To list all system logs that were handled by rsyslog, and inspect current and previous boot logs:")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v(" -lha /var/log/syslog*\n")])])]),s("h4",{attrs:{id:"_4-5-3-system-logs-with-systemd-journald"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-3-system-logs-with-systemd-journald"}},[e._v("#")]),e._v(" 4.5.3 System logs with systemd-journald")]),e._v(" "),s("ul",[s("li",[e._v("To get the system logs of the current boot:")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" journalctl -b\n")])])]),s("ul",[s("li",[e._v("To get the last 10 entries of system logs of the current boot:")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" journalctl -b -n "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),e._v("\n")])])]),s("ul",[s("li",[e._v("To Follow in realtime system logs of the current boot:")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" journalctl -b -f\n")])])]),s("ul",[s("li",[e._v("To check the logs of a ionoid.io manager "),s("code",[e._v("sealos-manager")]),e._v(" agent:")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" journalctl -b -u sealos-manager\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" journalctl -b -u sealos-manager-actions\n")])])]),s("ul",[s("li",[e._v("To check the logs of your Service or App, replace "),s("code",[e._v("$MYAPP")]),e._v(" with the name\nof your App:")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" journalctl -b -u "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$MYAPP")]),e._v("\n")])])]),s("p",[s("strong",[e._v("New Linux users:\nWhen you are in a linux terminal and you may find your self in file reading\nmode, just type "),s("code",[e._v("q")]),e._v(" to quit the reading mode. It should work 😉 !")])]),e._v(" "),s("hr"),e._v(" "),s("h3",{attrs:{id:"questions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#questions"}},[e._v("#")]),e._v(" Questions?")]),e._v(" "),s("p",[e._v("We're always happy to help with IoT Projects or other questions you might have! Check our "),s("a",{attrs:{href:"https://docs.ionoid.io/#/",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentation"),s("OutboundLink")],1),e._v(", contact support: support@ionoid.io, or connect with our sales team: sales@opendevices.io. You can also chat live with other developers in  "),s("a",{attrs:{href:"https://ionoidcommunity.slack.com/join/shared_invite/enQtODAzODgwOTIyMDY4LWExNWVmMDJhMDE2YWYyMjE3N2FlOGNlZjM4NDlmYmM5MmNhYWY1ZTZmOWMwYTYxYTMxNTQzODYzYmRmODMzOWI",target:"_blank",rel:"noopener noreferrer"}},[e._v("#slack"),s("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=o.exports}}]);