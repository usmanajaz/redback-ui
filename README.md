# Redback UI
Design system and UI component library for React, designed for Redback's data-driven applications.

## Prerequisites
- [Git](https://git-scm.com/downloads) installed
- [Node.js](https://nodejs.org/en/download/current) installed
- IDE or editor of choice (e.g., WebStorm, VS Code)
- Terminal of choice (e.g., Git Bash, Command Prompt, WSL, MacOS Terminal)
- Web browser
- Collaborator access to this repository (if you are a team member)
- Git credentials configured on your machine

### Recommended
- React Dev Tools browser extension for [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/), or [Edge](https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil)

### Optional
- Git GUI such as GitKraken, SourceTree, GitHub Desktop (if you prefer this over working only with terminal commands)

## Getting Started
1. Clone the repository to your local machine
    ```bash
    git clone https://github.com/Redback-Operations/redback-orion-web.git
    ```
   (or SSH if you have set up SSH access to your GitHub account)
2. Create a branch for your work, following the Capstone [Branching Guidelines](https://verdant-raindrop-f3e404.netlify.app/processes/quality-assurance/git-contributions-guide/#branching-guidelines)
    ```bash
    git branch <branch-name>
    ```
3. Check out your branch
    ```bash
    git checkout <branch-name>
    ```
4. Open your terminal and navigate to the project directory
    ```bash
    cd path/to/redback-fit-web
    ```
5. Run `npm install` to install the project dependencies
    ```bash
   npm install
    ```
6. Run `npm run storybook` to start Storybook and see the components and docs
    ```bash
    npm run storybook
    ```
## Creating a new component

[generate-react-cli](https://www.npmjs.com/package/generate-react-cli) is set up to generate the boilerplate code required for a new component using our pre-defined templates. To create a new component, run the following command in your terminal, replacing `ComponentName` with the name of your component.

```bash
npx generate-react-cli component ComponentName
```

A new folder named with your component name will be created in the `src/components` directory, containing the following files:
- `ComponentName.tsx`: the main React component file
- `ComponentName.styled.ts`: where styles are defined, using [styled-components](https://styled-components.com/)
- `ComponentName.stories.tsx`: the [Storybook](https://storybook.js.org/) file used to see, test, and document the component
- `ComponentName.test.tsx`: the unit test file. A basic example is included. Please add further tests as relevant to your component.

### Theme and design tokens
Design tokens are used to maintain consistency across the design system and applications that use it. The tokens are defined in a `theme.ts` file.

All apps/websites consuming Redback UI should define a theme with keys matching the example provided in Redback UI (i.e., of type `RedbackUiTheme)`, and be wrapped in a `RedbackUiThemeProvider` component imported from Redback UI. This component is a wrapper for styled-components' `ThemeProvider` that expects the tokens we have defined.

When developing components for Redback UI, please use design tokens wherever possible rather than hard-coding values. This will ensure consistency and make it easier to apply new themes or update the design system in the future. 

## Automated tests
This project is set up for unit testing with [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).  Further testing types will be added as the project progresses.

To run the unit tests from your terminal, run the following command:

```bash
npm run test:unit
```

Instructions on running tests using WebStorm's relevant IDE features will be made available in the Redback documentation website.

## Useful links
- [React docs](https://react.dev/)
- [Styled Components docs](https://styled-components.com/)
- [Storybook docs](https://storybook.js.org/docs/get-started/whats-a-story)
- [TypeScript docs](https://www.typescriptlang.org/docs/)
- Web Content Accessibility Guidelines (WCAG), in particular:
  - [1.4: Distinguishable](https://www.w3.org/WAI/WCAG21/quickref/#distinguishable)
  - [2.x: Operable](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#principle2)

