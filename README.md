![enter image description here](https://cdn.discordapp.com/attachments/856933249636237332/899289812731846686/unknown.png)

Windows 11 native-like apps using Javascript and HTML.
**Works with [Electron](https://github.com/electron/electron) and [NW.js](https://github.com/nwjs/nw.js) !**

[Download latest](https://github.com/ecnivtwelve/presqu11/releases)

![Preview of the window](https://i.imgur.com/ywPsFyw.png)

## Installation
Get the [latest release](https://github.com/ecnivtwelve/presqu11/releases) and import it into your project's folder.

#### In your HTML file
  import Presqu'11 CSS files in your <head> tag
  ```html
  <head>
    <link rel="stylesheet" href="presqu11.css">
  </head>
  ```
  and then import the JS at the end of <body>
  ```html
  <body>
    <!-- your code -->

    <!-- importing Presqu'11 -->
    <script src="presqu11.js"></script>
  </body>
  ```
  
## Usage
  To use Presqu'11 components, just add them in your HTML file.
  
  ### Title bar / Topbar
  ![Preview of topbar](https://i.ibb.co/x16ttQ8/Group-2.png)
  
  *The topbar is a key element of a Windows app. This one has been recreated from scratch using CSS, to fit Windows 11 guidelines.*
  
   ```html
  <w11-topbar icon="//your icon//" title="//your title//"></w11-topbar>
  ```
  **NWJS users : Controls like close, maximize etc... already works straight from <w11-topbar> with no additionnal code. Dragging works too.**
  
  **Electron users :  Dragging works out-of-the-box, but controls will not work and may crash the app**
  
  ##
  
  ### Tabs
  To use tabs, you need two key things : a tab and a way to select tabs. Both are included and works with no additionnal code.
  
  ![Tabs explaination](https://i.ibb.co/fXPsKhp/Frame-3.png)
  
  #### Tab selection (w11-tabs)
  ![Tab selection preview](https://i.ibb.co/1Q6zYMV/Group-3.png)
  
  ```html
  <w11-tabs default="// default tab //">
        <w11-tab-select icon="// icon //" text="Tab 1" for="tab1" class="selected"></w11-tab-select>
        <w11-tab-select icon="// icon //" text="Tab 2" for="tab2"></w11-tab-select>
    </w11-tabs>
  ```
  
  - `default=""` tells which tab should be shown by default. **The default app should also get the `class="selected"` to be selected in the selection.**
  - *The rest of the code is pretty self-explainatory, try by yourself.**
  
  #### Tab (w11-tab)
  The tab is what should be shown to users (it contains the main content).
  
  ```html
  <w11-tab id="tab11">
        <w11-tab-title>Tab 1</w11-tab-title>
        <w11-tab-content>
        </w11-tab-content>
  </w11-tab>
  ```
  
  **The ID should be the same as `for=""` in your tab selection**, otherwise, it may crash the app.
  
  *The `<w11-tab-title>` is optionnal, but recommended for user experience* **If used, you should add your content in `<w11-tab-content>`. If you don't use `<w11-tab-title>`, it's optionnal to use `<w11-tab-content>`.**
  
  
   ##
  
  ### Other components
  For the other components, [read the wiki](https://github.com/ecnivtwelve/presqu11/wiki/Components).
