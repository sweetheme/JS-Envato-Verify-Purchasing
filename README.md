# Javascript Envato Verify Purchasing

Using this javascript source you can make verify purchasing code for your themeforest item using genertor that buyer will input his envato username, purchase code and his website url, inputing the output code in the item with enable this version to work with this url only.


### - How can this secure my envato item?

If someone try to purchase the item and publish it for free he must include his envato information inside free downloaded version of your item and this will help you and help envato to find him.

### - Can users use this for more that one site?

Yes They can do that.

### - How can i use it?

At first you need to bulid this in two sides [Generator Side - Item Side] 

In both sides you should include jquery and crypto.js files 

```html
<script src="jquery-1.10.2.min.js"></script>
<script src="crypto-js-aes.js"></script>
```

##### 1- Generator Side

Add javascript for generator this create form named Envato you can style it, you will need to follow this 

  - Replace Secret_item_Password with password for your this item 
  - Replace encoding_password with password used to get the normal data of the user
  - Replace 1234567 with your item ID
  - Replace API_KEY with your envato Api Key


##### 2- Item Side

Now add item javascript in your item and follow this 

  - Replace Secret_item_Password with password for your this item that you [same typed in generator.js]
  - Replace encoding_password with password used to get the normal data of the user [same typed in generator.js]
  - Add your javascript codes after this ``// Item Js codes under this``

### - How can i get API KEY?

In your themeforest settings page go to Api Key section and generate new Key.

### - How can i find Item id?

You will find it in your item URL after name of your item.

### - How can i secure my codes?

You need to encrypt javascript codes in both sides after you finish all of your settings.
