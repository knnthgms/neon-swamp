import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`
/* Inter - Thin */
@font-face {
	font-family: "Inter";
	src: url("/fonts/Inter-Thin.ttf") format("truetype");
	font-weight: 100;
	font-style: normal;
}

/* Inter - Light */
@font-face {
	font-family: "Inter";
	src: url("/fonts/Inter-Light.ttf") format("truetype");
	font-weight: 300;
	font-style: normal;
}

/* Inter - Light Italic */
@font-face {
	font-family: "Inter";
	src: url("/fonts/Inter-LightItalic.ttf") format("truetype");
	font-weight: 300;
	font-style: italic;
}

/* Inter - Regular */
@font-face {
	font-family: "Inter";
	src: url("/fonts/Inter-Regular.ttf") format("truetype");
	font-weight: 400;
	font-style: normal;
}

/* Inter - Italic */
@font-face {
	font-family: "Inter";
	src: url("/fonts/Inter-Italic.ttf") format("truetype");
	font-weight: 400;
	font-style: italic;
}

/* Inter - Medium */
@font-face {
	font-family: "Inter";
	src: url("/fonts/Inter-Medium.ttf") format("truetype");
	font-weight: 500;
	font-style: normal;
}

/* Inter - Medium Italic */
@font-face {
	font-family: "Inter";
	src: url("/fonts/Inter-MediumItalic.ttf") format("truetype");
	font-weight: 500;
	font-style: italic;
}

/* Inter - SemiBold */
@font-face {
	font-family: "Inter";
	src: url("/fonts/Inter-SemiBold.ttf") format("truetype");
	font-weight: 600;
	font-style: normal;
}

/* Inter - SemiBold Italic */
@font-face {
	font-family: "Inter";
	src: url("/fonts/Inter-SemiBoldItalic.ttf") format("truetype");
	font-weight: 600;
	font-style: italic;
}

/* Inter - Bold */
@font-face {
	font-family: "Inter";
	src: url("/fonts/Inter-Bold.ttf") format("truetype");
	font-weight: 700;
	font-style: normal;
}

/* Inter - Bold Italic */
@font-face {
	font-family: "Inter";
	src: url("/fonts/Inter-BoldItalic.ttf") format("truetype");
	font-weight: 700;
	font-style: italic;
}

/* Inter - ExtraBold */
@font-face {
	font-family: "Inter";
	src: url("/fonts/Inter-ExtraBold.ttf") format("truetype");
	font-weight: 800;
	font-style: normal;
}

/* Inter - ExtraBold Italic */
@font-face {
	font-family: "Inter";
	src: url("/fonts/Inter-ExtraBoldItalic.ttf") format("truetype");
	font-weight: 800;
	font-style: italic;
}

/* Inter - Black */
@font-face {
	font-family: "Inter";
	src: url("/fonts/Inter-Black.ttf") format("truetype");
	font-weight: 900;
	font-style: normal;
}

/* Inter - Black Italic */
@font-face {
	font-family: "Inter";
	src: url("/fonts/Inter-BlackItalic.ttf") format("truetype");
	font-weight: 900;
	font-style: italic;
}

body,
html,
a,
h1,
h2,
h3,
h4,
h5,
h5 {
	font-family: 'Inter', sans-serif;
	color: #18216d;
}

body {
	margin: 0;
	padding: 0;
	border: 0;
	outline: 0;
	background: #fff;
	overflow-x: hidden;
}

.ant-drawer-body {
	display: flex;
	flex-direction: column;
}

.ant-drawer-content-wrapper {
	width: 300px !important;
}
	/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
}
/*
  Typographic tweaks!
  3. Add accessible line-height
  4. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
/*
  5. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  6. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  7. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
  8. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}
`;
