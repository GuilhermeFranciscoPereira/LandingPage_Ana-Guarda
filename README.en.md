<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=40E0D0&height=120&section=header"/>

# 🗽 Landing Page - Ana Flávia Guarda 🗽

<p align="left">
  <a href="./README.en.md">
    <img src="https://img.shields.io/badge/%F0%9F%8C%8D%20Click%20here%20to%20read%20this%20documentation%20in%20english!%20-purple?style=for-the-badge" alt="Button to change the documentation to English"/>
  </a>
</p>

> Landing page link: https://ana-flavia-guarda.vercel.app/

## 📌 About this landing page

### This landing page was developed for the English teacher Ana Flávia Guarda (20 years old), with the goal of converting more students.

## 🎯 Main objectives I have with this project
- ✔️ Speed: It should be fast, as studies show that after 2 seconds of loading a site, there is a high user bounce rate, meaning we lose potential customers.
- ✔️ Robust code: Well-organized, easy-to-maintain source code.
- ✔️ Structure: A well-structured and organized layout for clear visualization and usability.
- ✔️ Copy: I intend to create compelling copy to increase student conversion.
- ✔️ SEO.

#
<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=40E0D0&height=120&section=footer"/>

##

<img width=100% src="https://capsule-render.vercel.app/api?type=waving&height=120&section=header"/>

## 🛎️ Key updates in this commit

### `react-icons:` Installed the react-icons lib to use the icons!

### `src/components/WhyTakeClassWithMe:` Component that shows the user the benefits of the methodology used by Ana, providing real data and a link for full visualization.

<img width=100% src="https://capsule-render.vercel.app/api?type=waving&height=120&section=footer"/>

## 🖥 Technologies Used
<div align='center'>

!['NextJSLogo'](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
!['TypescriptLogo'](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
!['CssLogo'](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

</div>

## Versions used:
    - Next: 15.3.5
    - React: 19.0.0
    - TypeScript: 5

## 🙋🏻‍♂ How to locate the project files?

### All source code files for the project are in: `./src`

## 🛈 How the project is structured

- `./src/app:` This project is in Next, so we have the core of the landing page located entirely here on the app page, where the page.tsx file is what is rendered along with the components that are invoked in it.

- `./src/assets:` Where are all the photos and static files that will be used in the project.

- `./src/components:` This is where the components that will be reused in various parts of the code are located. In this project, we have the following components:
    - AboutWhoAmI: This is the first component of the "About" section, where we introduce who Ana Flávia Guarda is.
    - Buttons: Responsible for the website's buttons. - Header: Header located at the top of the landing page
    - MainSection: Where we have the first component on the screen
    - TypingWords: Created solely to utilize the 'use client' in a smaller part of the code, this component is for changing words below the subtitle.
    - WhyTakeClassWithMe: Component that shows the user the benefits of the methodology used by Ana, providing real data and a link for full visualization.

- `./src/hooks:` Contains our custom hooks with the logical parts of all our components:
    - useAboutWhoAmI: Hook that controls the "Infinite" text that scrolls right at the top, written "Ana Guarda."
    - useButtonDarkMode: Manages whether the user has chosen the dark or light theme for the landing page.
    - useHeader: Intended for the header, containing the logic to show/hide the page's routing options.
    - useMainSection: For changing words below the subtitle, creating the animation to "create"/"delete" words letter by letter.

- `./src/services:` Folder containing the service functionalities. We have a single file called "ScrollAnimation" that serves only to create the aos configuration (responsible for the animation when scrolling on the landing page) and export it to page.tsx, since this way we can use the 'use client' directive in the file and not in the main application.

## ❔ How to run the project on my machine?

- You can access the landing page via this link:
    > Landing page link: https://ana-flavia-guarda.vercel.app/

- But if you want to view the source code, follow these steps:

- First of all, you need to have Git installed on your computer. Git is a tool that allows you to clone and manage code repositories.
    - Windows: Download Git <a href="https://git-scm.com/download/win" target="_blank">here</a> and follow the installation instructions.
    - macOS: You can install Git <a href="https://git-scm.com/download/mac" target="_blank">here</a> or using Homebrew with the command brew install git:
        ```bash
        brew install git
        ```
        
    - Linux: Use your distribution’s package manager, for example for Debian/Ubuntu:
        ```bash
        sudo apt install git
        ```

- Open the terminal (on Windows, you can use Git Bash, which is installed along with Git).

- Navigate to the directory where you want to store the project.

- Execute the command to clone the repository:

    ```bash
    git clone https://github.com/GuilhermeFranciscoPereira/LandingPage_Ana-Guarda.git
    ```
    
- After cloning the repository, navigate to the project folder
    ```bash
    cd LandingPage_Ana-Guarda
    ```

- Now you can open the project files with your preferred editor or IDE. Example for VS Code:
    ```bash
    code .
    ```

- 🚨 Don’t forget that to avoid errors when cloning the code, you must run the following command 🚨
    ```bash
    npm i
    ```

- Done! The entire site will be working on your machine. However, if you need any help, feel free to get in touch with me on LinkedIn: https://www.linkedin.com/in/guilherme-francisco-pereira-4a3867283

##

## 🎉 That’s it! This is our Landing Page developed for Ana Flávia Guarda. If you have any questions or want to collaborate directly with me, you can contact me through my LinkedIn:
> My LinkedIn link: <a href="https://www.linkedin.com/in/guilherme-francisco-pereira-4a3867283" target="_blank">https://www.linkedin.com/in/guilherme-francisco-pereira-4a3867283</a>

### 🚀 Thanks for your attention and I hope you enjoyed what you’ve seen here; how about checking out my other repositories now? 👋🏻

#

### ❤️ Credits:

#### Emoji credits:
> <a href="https://emojipedia.org" target="_blank">https://emojipedia.org</a>

- #### Badge credits:
> <a href="https://shields.io" target="_blank">https://shields.io</a>
