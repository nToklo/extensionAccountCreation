## Creating an nToklo account & application from an eCommerce platform extension
How to create an nToklo account and application from within your platform admin panel
-------------------------------------------------------------------------------------------------

## Introduction

This document aims to clarify the technical requirements for creating an nToklo account for your extension users. It is assumed that you have read the specification, as this document provides more detail around the "one-click installation" section / process.


## Glossary

User - will refer to a user of the nToklo Extension. NOT a user of the retail store.
Consumer - a user of which ever retail store = eCommerce platform, is in discussion.
Platform - unless otherwise stated the use of the term platform will refer to the specific eCommerce platform for which the Extension / Plugin / App is being developed.
Store - the retail store owned / operated by the user.


## Overview

In order for users to take advantage of nToklo recommendations, they must have an nToklo account and an application linked to their store. To help users create their account, nToklo has provided a customised registration form together with the code to launch the process.


## Process

You must include two links in your extension settings panel; one allows the user to register with nToklo, the other allows them to login if they already have an account. When the user clicks on either of these links, an iFrame is created showing a form, styled with a header showing your platform logo. The form will be prepopulated with values passed in as query string parameters on the link URLs.

From the users' point of view, they will only see two steps during the installation process:

1.	A screen asking them to register or login.
2.	A screen telling them their application has been created, and showing them the key and secret that they need to copy and paste into the extension settings.

Behind the scenes, there are 3 steps (plus one additional one for new users):

1.	User must register with nToklo or login to their account if they have one.
2.	An application will be created based on details passed in from their store.
3.	User must copy the key and secret data from the nToklo site and paste it into the extension settings panel.
4.	(Only) New users must authenticate their account by clicking on an email that will be sent once they have created their account.

Step 1 - User must register with nToklo or login to their account if they have one.
To register with nToklo, you must provide the following details:

First Name = window.ntParams.f
Last Name = window.ntParams.l
Email = window.ntParams.e

These values should be set in the window.ntParams javascript object, which is shown below.

To complete the registration, the user will set a password in the nToklo form. If the user already has an account with nToklo, only the email is required. You should, however, populate all values in the window.ntParams object.

Step 2 - An application will be created based on details passed in from their store.
Each store that wants to use the nToklo for Retail service must have an application linked to it so you must pass through the name and URL of the store. The application will be created automatically after a successful registration or login. The values required are:

App name = window.ntParams.n
App URL = window.ntParams.d

The URL of the store should not contain the protocol (http(s)://).

### You can see the window.ntParams object in full below.

Step 3 - User must copy the key and secret data from the nToklo site and paste it into the extension settings panel.
The key and secret is what allows your extension to POST activity to and GET recommendations & charts from the nToklo servers. This must be copied from the second screen the user sees into your extension's settings panel. The key and secret is a JSON-formatted string to allow the user to cut & paste only once, reducing the complexity of the form and therefore reducing the risk of error. Once the string has been copied into your settings panel you'll need to parse it and store the key & secret accordingly.

Step 4 - (Only) New users must authenticate their account by clicking on an email that will be sent once they have created their account.
Users will not be able to use the nToklo service until they have clicked on the confirmation email they receive during the account creation process.


## Simple example

``` html
<html>
	<head>
		<link href="ntoklo.css" rel="stylesheet" media="screen, projection" type="text/css" />
	</head>
	<body>
		<a class="btn no_account" href="#" id="ntLaunchRegister">
			I don't have an nToklo account
		</a>
		<a class="btn account" href="#" id="ntLaunchLogin">
			I already have an nToklo account
		</a>
		<div id="ntIFrameWrapper"></div>
		<script type="text/javascript">
			window.ntParams = {
				"p" : "Platform",
				"f" : "User's first name",
				"l" : "User's last name",
				"e" : "User's email",
				"n" : "Store name",
				"d" : "Store URL"
			}
		</script>
		<script src="ntoklo.js" type="text/javascript"></script>
	</body>
</html>
```

When the user clicks on either button, an iFrame with the registration / login form will be displayed in the ntIFrameWrapper.

Please see the example.html page for working examples of the code.

