# **Introduction**

## **HK ENERGY SOLUTION:**

At **HK Energy Solutions**, we empower homeowners across the UK to access vital government-backed home improvement services with ease and confidence. Specializing in central heating installations, energy-efficient home insulation, solar PV systems, heat pumps, battery storage, EV charging solutions, and EPC certification, we act as a trusted intermediary between you and the UK government.Our role is simple we guide you through the process, manage applications, and ensure you receive these essential services seamlessly, without the hassle of dealing directly with government channels. By simplifying access to sustainable home upgrades, we help you enhance comfort, reduce energy costs, and make your home greener-all with expert support every step of the way.

We specialize in a wide range of home services, including:

- Solar PV Installation
- Heat Pump Systems
- Home Insulation
- EPC Certificates
- Battery Storage
- EV Charging Solutions

# **Client Requirements**

## **Website Name:**

HK ENERGY SOLUTIONS

## **Project Overview:**

HK Energy Solutions is a home-services company that specializes in central heating system installations, insulation services, and related home improvement solutions. The website will present company information and allow users to submit inquiries through a contact form. Instead of a backend or database, the website will use email.js to send form submissions directly to the company's email inbox.

## **Goals & Objectives**

Primary Color: \`#ffffff\` (backgrounds and light UI sections)

- Provide a simple, modern website for HK Energy Solutions.
- Showcase heating, insulation, and other home comfort services.
- Allow users to contact the company quickly.
- Send all form submissions directly to company email using email.js (no backend).
- Improve credibility with a clean and trustworthy online presence.

## **Target Audience:**

- Homeowners needing central heating installation.
- People improving home insulation & energy efficiency.
- Landlords, property managers, and tenants.
- Anyone seeking heating or insulation-related services.

# **Functional Requirements:**

## **General**

- Fully responsive design across all devices.
- Clean navigation menu linking to all main pages.
- Consistent layout with header & footer.

## **Pages & Features**

### **Home Page**

Hero banner with headline (e.g., "Reliable Heating & Insulation Solutions").

Quick intro about the company.

Overview links to Heating, Insulation, Other Services.

CTA button: "Get a Quote" → Contact Page.

### **About Page**

- Company background.
- Experience in heating & insulation.
- Mission statement.
- Optional: team or project images.

## **Contact Page (email.js Form - No Backend)**

This is the primary lead-capture function. Form Fields:

- Full Name
- Email
- Phone Number
- Address (optional)
- Select Service (Dropdown):
- Central Heating Installation
- Insulation
- Heating Upgrade
- Other Services
- Message Box

## **Form Behavior:**

- Validate all required fields.
- On submit:
- Send all form data through email.js to the company's email.
- Display a success or failure notification.
- No data stored only email delivery.

## **Heating Page**

- Details about central heating installation.
- Types of systems (optional).
- Benefits: efficiency, comfort, cost savings.
- CTA to contact page.

## **Insulation Page**

- Description of insulation services (wall, roof, loft, etc.).
- Benefits: lower bills, better heat retention, energy efficiency.
- CTA to contact page.

## **Other Services Page**

- List other services offered by HK Energy Solutions.
- Short description under each.
- CTA to contact page.

## **Non-Functional Requirements**

- Fast loading (under 3 seconds).
- SEO-friendly structure and metadata.
- Accessible design (alt tags, proper contrast).
- Secure email.js integration with environment variables.
- Clean, modern, trustworthy UI.

## **Technical Requirements**

- Framework: Next.js (React)
- Styling: Tailwind CSS
- Form Handling: email.js (No backend required)
- Hosting: Vercel (recommended)
- Environment variables securely stored in .env for email.js keys.

## **Sitemap / Pages**

- Home
- About
- Contact (email.js form)
- Heating
- Insulation

## **Other Services**

Content Requirements

- Company intro text.
- Service descriptions for Heating, Insulation, Other Services.
- Contact form text, field labels, and validation messages.
- Company phone number & email.
- Brand colors, logo, and high-quality images.

## **Design Requirements**

- Clean, minimal, energy-efficient color palette ( green( #1B5E20 ), white( #FFFFFF ), light green( #66BB6A ) black(#000000) ).
- Large headings and easy-to-read fonts.
- Smooth but simple animation transitions.
- Consistent spacing and card-style service layouts.
- Icons representing heating, insulation, energy savings.

## **Deployment & Maintenance**

- Hosted on Vercel (auto-deployment).
- email.js account maintained by the company.
- Occasional updates to content & images.
- Check email.js monthly for usage limits.

# **Setup**

## **Project initialization:**

To initialize the project, we followed the official recommended setup process from the Next.js documentation. The project was created using the standard initialization command:

npx create-next-app@latest

After running the official initialization command, the CLI prompts for basic project setup details. During this step, the project name was provided as:

## **What is your project named? hk-energy-solutions:**

Next, the setup process asks whether you want to proceed with the recommended Next.js configuration. Choosing "Yes, use recommended defaults" automatically enables the ideal development tools for a modern, scalable, and high-performance website

## **Installation:**

? Would you like to use the recommended Next.js defaults? » - Use arrow-keys. Return to submit.

\> Yes, use recommended defaults

TypeScript, ESLint, Tailwind CSS, App Router

No, reuse previous settings

No, customize settings

After confirming the setup options, Next.js automatically created the project, installed all required dependencies (React, Tailwind, TypeScript, ESLint, etc.), initialized Git, and successfully generated the project structure.

## **Start server:**

npm run dev

## **Tools**

- Next.js
- Tailwind CSS
- React Hooks
- TypeScript

# **libraries**

## **framer-motion:**

npm i framer-motion

**Framer Motion** is a powerful React library for creating smooth, high-performance animations and interactive UI transitions. It allows developers to easily animate components, enhance user experience, and bring web interfaces to life with minimal code.

## **Zod:**

npm i zod

**Zod** is a TypeScript-first schema validation library that ensures data correctness by defining, parsing, and validating objects with a simple and expressive syntax.

## **Lucide React:**

npm install lucide-react

lucide-react is a React library that provides a collection of crisp, customizable, and lightweight SVG icons.It allows developers to easily integrate vector icons into React applications, with support for sizing, color, and other styling options, ensuring scalable and visually consistent icons across the UI.

# **Folder Structure**

# **app:**

"main directory"

## **about**

\`about\` is a subfolder inside the \`app\` directory.

## **page.tsx:**

Rendered Components:

&lt;Banner / &gt;

&lt;Story /&gt;

&lt;div className="bg-accent"&gt;

&lt;CoreValues /&gt;

&lt;/div&gt;

&lt;div className="md:mt-10 mt-5"&gt;

<CtaBanner

title="Looking to Upgrade Your Home's Energy Efficiency?"

description="Learn how HK Solution Energy can transform your home with innovative, eco-friendly solutions tailored to your needs."

buttonText="Get Qu

The \`about\` folder contains the \`page.tsx\` file, which renders the complete About page of the website.

This page is built using multiple reusable components to provide a clean and structured layout.

## **contact**

"\`contact\` is a subfolder inside the \`app\` directory."

## **page.tsx:**

Rendered Components:

&lt;div className="w-\[95%\] mx-auto flex flex-col items-center justify-center"&gt;

&lt;h2 className="heading font-bold text-primary text-center py-5 md:py-10"&gt;

Get in touch: we are here to help you

&lt;/h2&gt;

&lt;div className="w-full flex flex-col md:flex-row justify-between items-center gap-10"&gt;

&lt;div className="md:w-\[48%\] w-full"&gt;

&lt;Form /&gt;

&lt;/div&gt;

The \`contact\` folder contains the \`page.tsx\` file, which renders the complete Contact page of the website.

This page is built using multiple reusable components to provide a clean and structured layout.

## **Services:**

"\`services\` is a subfolder inside the \`app\` directory.Which contain another folder \[service\]"

## **Service:**

"The \[service\] folder enables dynamic routing for the services pages. When a user selects a service from the dropdown menu, the dynamic route fetches and displays the relevant services information."

## **page.tsx:**

located inside the \`services/\[servce\]\` folder

Rendered Components:

&lt;div className="pt-5 "&gt;

{selectedService ? (

&lt;div&gt;

&lt;Hero heroProps={selectedService.hero} /&gt;

<Features

featuresHeading={selectedService.featuresHeading}

features={selectedService.features}

/>

&lt;HowItWorks worksprops={selectedService.howItWorks} /&gt;

<InstallationProcess

installprops={selectedService.installationProcess}

/>

&lt;Testimonials /&gt;

<CtaBanner

title={selectedService.cta.heading}

description={selectedService.cta.subHeading}

buttonText={selectedService.cta.buttonText}

/>

&lt;FAQ faqs={selectedService.faqs} /&gt;

&lt;/div&gt;

) : (

&lt;h1&gt;Service not found&lt;/h1&gt;

)}

This dynamic Service Page renders content based on the URL parameter using the findService helper function. It pulls service-specific data-such as banner, headings, descriptions, features, and "Why Choose Us" items-and uses reusable components (Hero, HowItWorks, InstallationProcess, Testimonials, CtaBanner Features, FAQ ) to build a complete, structured layout.

The page also includes generateMetadata, ensuring each service receives unique SEO titles and descriptions. This implementation keeps the Services section fully scalable, SEO-friendly, and efficiently organized.

## **components**

located inside the \`app\` directory,

The \`components\` folder contains reusable UI components organized into four subfolders:

**About** Components used on the About page

**Contact** Components for contact forms and related sections

**Services** Components displaying various service offerings

This structure ensures a modular, organized, and maintainable codebase, making it easy to manage and reuse components across the website.

### **About:**

located inside the \`components\` folder

The \`About\` folder contains all the reusable components specifically created for the About page.

These components structure and display content to ensure a clean and consistent layout. Key components include:

- Banner.tsx
- CoreValues.tsx
- MissionVision.tsx
- Story.tsx
- Team.tsx

##### **Banner.tsx:**

located inside the \`About\` folder

The \`AboutBanner\` component displays the main banner image for the About page. It includes a full-width, responsive image with a semi-transparent overlay, providing a visually appealing header section for the page.

##### **CoreValues.tsx:**

located inside the \`About\` folder

The CoreValues component of HK Energy Solutions showcases the company's key principles and commitment to providing reliable, sustainable, and government-backed energy solutions. It starts with a heading and a short paragraph that explains the company's focus on guiding clients toward approved programs that enhance efficiency, reduce energy costs, and promote a greener future. Below this, it dynamically displays each core value with an icon, title, and description, arranged in a responsive layout that adapts to different screen sizes. The component is visually structured with styled cards to clearly highlight each value, reinforcing the company's credibility and dedication to quality service.

##### **MissionVision.tsx:**

located inside the \`About\` folder

The \`MissionVision\` component displays the company's mission and vision statements on the About page. It dynamically renders each item from the \`missionvision\` array imported from \`resources/about\`, showing a heading and corresponding description for each. The layout uses Tailwind CSS for spacing, typography, and responsive design, arranging the content in a clean, readable format across both desktop and mobile screens.

##### **Story.tsx:**

located inside the \`About\` folder

The Story component of HK Energy Solutions showcases the company's background and key milestones in a clean, responsive layout. It features a heading and paragraph explaining the company's mission to simplify access to UK government-backed energy programs, acting as a trusted intermediary for solar PV, heat pumps, and insulation solutions. Below, milestones are dynamically displayed with icons, titles, optional subtitles, and years, highlighting major achievements. On the right, an image complements the text with a polished, rounded style. The flexbox layout ensures readability and visual appeal across all screen sizes.

##### **Team.tsx**

located inside the \`About\` folder

The Team component of HK Energy Solutions introduces the company's professionals in a clean, responsive layout. It starts with a heading and a short description highlighting the team's dedication to innovative and sustainable energy solutions. Below, each team member is displayed with a rounded image, name, and role, arranged using flexbox to ensure a visually appealing and adaptable layout across all screen sizes

## **Contact:**

located inside the \`components\` folder

The \`Contact\` folder contains all the reusable components for all pages of websites .These components structure and display content to ensure a clean and consistent layout. Key components include:

- ContactForm.tsx
- ContactPage.tsx

##### **ContactForm.tsx:**

located inside the \`Contact\` folder

The ContactForm component of HK Energy Solutions provides a comprehensive contact section with a two-panel layout. On the left, it displays a heading, a brief description encouraging users to get in touch, and contact details including address, phone number, and email, each accompanied by icons for clarity. It also includes an embedded Google Map for easy location reference, styled with rounded corners and a shadow for a polished look. On the right, the component renders a Form component where users can submit inquiries directly. The layout is responsive, using flexbox to stack panels on smaller screens while maintaining a balanced and visually appealing design across devices.

##### **ContactPage.tsx**

located inside the \`Contact\` folder

The ContactPage component of HK Energy Solutions provides a well-structured, visually appealing contact section. It begins with a section displaying the company's contact details, including phone number, email, and physical address, each accompanied by relevant icons for clarity. Below that, the component lists the company's operating hours for each day of the week, making it easy for visitors to know when the team is available. Finally, the component includes an embedded Google Map showing the company's location, styled with rounded corners and a shadow to maintain a polished look. The layout is centered, uses responsive spacing and padding, and presents all information in a clean, accessible manner for users.

## **Services:**

located inside the \`components\` folder

The \`Services\` folder contains all the reusable components.

These components structure and display content to ensure a clean and consistent layout. Key components include:

- Features.tsx
- Hero.tsx
- HowItWorks.tsx
- InstallationProcess.tsx

##### **Features.tsx:**

located inside the \`Services\` folder

The Features component displays a section highlighting key features of a product or service. It includes a centered heading with a subheading, followed by a responsive grid of feature cards. Each card shows an icon, title, and description, styled with rounded corners, shadows, and hover effects for interactivity. The layout adapts to different screen sizes, ensuring a clean and visually engaging presentation.

##### **Hero.tsx:**

located inside the \`Services\` folder

The Hero component creates a visually striking hero section for a webpage. It accepts heroProps containing a heading, subheading, and a background image. The section features a full-width container with a minimum height, rounded corners, and a background image overlaid with a gradient for better text readability. Inside, the heading and subheading are displayed in a stacked layout, aligned to the bottom-left, providing a clear and engaging introduction. The design ensures the hero section is responsive, visually appealing, and immediately communicates the page's key message to visitors.

##### **HowItWorks.tsx**

located inside \`services\` folder

The HowItWorks component presents a section explaining a process or service in a clear, visual format. It accepts worksprops containing a heading, description, and an image. The layout uses a responsive two-column grid, with the heading and description on the left and the image on the right. The image is styled with rounded corners, overflow hidden, and a shadow for a polished look. This structure ensures the content is easy to read and visually engaging across all screen sizes.

##### **InstallationProcess.tsx**

located inside \`services\` folder

The InstallationProcess component visually presents the steps involved in a service installation. It accepts an array of installprops, each representing a step with a number, title, and description. The section begins with a centered heading, followed by a responsive grid of cards for each step. Each card displays the step number inside a styled circle, the step title, and a description, all centered and visually organized. Cards feature rounded corners, shadows, and hover effects to enhance interactivity, while the responsive grid ensures the layout remains clear and engaging across different screen sizes.

## **Banner.tsx:**

located inside \`components\` folder

The Banner component creates a full-screen hero section for the homepage, showcasing HK Energy Solutions' key message. It uses a background image with a semi-transparent black overlay for better text visibility. Centered within the section is a heading and subheading that highlight the company's reliability, home energy solutions, and expert services. The content is styled with drop shadows, responsive widths, and a fade-in animation to enhance visual appeal. Overall, it serves as an engaging, attention-grabbing introduction to the website.

## **Form.tsx:**

located inside the \`components\` folder

Reusability Across Pages

- Services and its Dropdown Menus
- Popup on click Book My Appointment button and Avail offer
- Contact

The Form component is a fully functional, interactive contact form built with React and validated using **Zod**. It collects user inputs such as name, email, phone number, homeowner status, system age, fuel type, and a message. Each field is controlled using React state and validated in real-time with Zod, displaying error messages below invalid fields. The form supports both regular page use and popup modals, adjusting its layout and styling accordingly. Inputs include text fields, select dropdowns, and a textarea, each accompanied by icons for clarity. On submission, the form validates all fields, updates error states if invalid, and logs the submitted data when valid. The component is styled with Tailwind CSS for a modern, responsive, and accessible design, including focus states, hover effects, and smooth transitions.

## **Contactbtn.tsx:**

located inside \`component\` folder

The ContactBtn component is a reusable button that opens a popup contact form when clicked. It uses React state to track whether the popup is visible (popup) and toggles the page's scroll behavior using useEffect to prevent background scrolling when the popup is open. Clicking the button sets popup to true, triggering the display of the Form component inside a modal. The modal is rendered using createPortal to overlay it on top of the entire document, with a semi-transparent, blurred backdrop that closes the popup when clicked. This ensures a smooth, user-friendly modal experience while keeping the underlying page accessible and styled consistently.

## **Faq.tsx:**

located inside the \`component\` folder

Reusability Across Pages

- Home
- Services and its Dropdown Menus
- Contact

The FAQ component displays a list of frequently asked questions in an interactive, collapsible format. It accepts an array of faqs, each containing a question and answer. Each question is shown inside a styled, clickable box; clicking toggles the visibility of its corresponding answer using the openIndex state. The answer section smoothly expands or collapses with a CSS transition (max-height) for a clean animation effect. The component is fully responsive, visually organized with spacing, rounded corners, shadows, and distinct background colors, providing a user-friendly way for visitors to access information.

## **Footer.tsx:**

located inside the \`Component\` folder

Reusability Across Pages

- All pages in website

The Footer component provides a comprehensive, responsive footer section for the website. It is divided into multiple columns: a general information section from text, a services list, quick links, and a contact section with address, phone, and email details. Social media icons (Facebook, Instagram, Twitter) are displayed in a styled, rounded layout for easy access. The layout uses flexbox and responsive widths to adapt across screen sizes, hiding some sections on smaller screens for clarity. A horizontal rule separates the main content from the bottom copyright notice, which dynamically displays the current year and includes a privacy policy reference. Overall, it ensures visitors can quickly access key information, links, and contact details in a visually organized manner.

## **Navbar.tsx:**

located inside the \`components\` folder

Reusability Across Pages

- All pages in website

The Navbar component provides a responsive, sticky navigation bar for the website. It displays the site logo, navigation links, and a call-to-action button (ContactBtn). On desktop (lg screens), links with submenus show a dropdown on hover, while regular links are clickable. On mobile, a hamburger menu toggles the visibility of a vertical menu; submenu items expand/collapse on click using the openDropdown state. The component uses useRef and useEffect to detect clicks outside the menu to automatically close it. Styling includes sticky positioning, backdrop blur, shadows, and smooth transitions for a polished, user-friendly navigation experience across all devices.

## **Services.tsx:**

located inside \`components\` folder

The Services component showcases the range of energy solutions offered by HK Energy Solutions. It starts with a heading and descriptive paragraph, emphasizing government-backed, certified programs that enhance home efficiency, comfort, and sustainability. The services are displayed in a responsive flexbox grid, showing up to three cards per row depending on screen size. Each card includes an icon from lucide-react, a title, a brief description, and a "Learn More" button for additional engagement. The layout uses distinct background colors (bg-accent for the section and bg-secondary for cards) and rounded corners to create a visually appealing and organized presentation of the company's offerings.

## **HeroSection.tsx**

located inside \`components\` folder

The HeroSection component presents HK Energy Solutions' mission in a clean, responsive layout. On the left, it features a heading and a paragraph describing how the company helps homeowners access UK government-backed energy services-like solar PV, heat pumps, insulation, battery storage, EV charging, and EPC certification-to reduce energy costs, improve comfort, and support sustainability. It emphasizes HK Energy Solutions as a trusted intermediary, ensuring a smooth process from start to finish. On the right, an image visually complements the text, styled with object-cover and rounded-2xl for a polished appearance. The layout uses flexbox to stack elements on smaller screens and display them side by side on larger screens, maintaining readability and visual appeal across devices.

## **Testimonial.tsx:**

located inside \`components\` folder

The Testimonials component showcases client feedback in a visually appealing, responsive layout. It starts with a centered heading and subtext emphasizing customer trust. Below that, it renders a grid of testimonial cards using the testimonials array. Each card displays the client's feedback, name, and optionally their role. Cards have a bg-accent background, rounded corners, shadows, and subtle hover animations (-translate-y-3 and shadow change) to create an interactive feel. The grid is responsive, showing one column on small screens, two on medium, and three on large screens, ensuring readability and aesthetic consistency across devices.

## **WhyChooseUs.tsx**

located inside the \`component\` folder

Reusability Across Pages

- Home

The WhyChooseUs component highlights the key reasons to select HK Energy Solutions. It begins with a centered heading and a short paragraph explaining the company's focus on providing homeowners with government-backed energy upgrades that reduce bills, improve comfort, and add long-term value. Below this, a responsive grid of StatCard components showcases six core benefits, each with an icon, title, and subtitle. The cards cover aspects like UK certification, government grants, free surveys, expert engineers, applicability to all home types, and high customer satisfaction. The layout is fully responsive, using grid columns that adjust from one column on small screens to three on large screens, and each card features hover effects, rounded corners, and contrasting background colors for visual appeal and clarity.

## **resources:**

located inside the \`app\` directory

The \`resources\` folder contains structured data files used throughout the application, providing organized content and configurations for various components.

- about.ts
- faq.ts
- footer.ts
- navlinks.ts
- services.ts
- testimonial.ts

##### **about.ts:**

The \`about.ts\` file in the \`resources\` folder provides structured content for the About page of the website.

This code organizes key company information for a website in a structured way. It defines the company's **vision** and **mission**, explaining its long-term goals of being a trusted energy solutions provider in the UK and how it operates with ethical standards, team support, and continuous growth to deliver high-quality services. The **core values** section highlights three guiding principles-Integrity, Innovation, and Customer Focus-each with an icon and description to show how the company works transparently, stays up-to-date with modern energy solutions, and prioritizes client needs. Finally, the **team** array lists key members with their names, roles, and images, showcasing the leadership and expertise behind the company. This setup allows the website to dynamically display the company's purpose, values, and team in a clear, engaging, and visually consistent way.

##### **faq.ts:**

The \`faq.ts\` file in the \`resources\` folder contains a structured list of frequently asked questions This code defines an FAQ structure for a website using TypeScript. It declares a FAQ type with question and answer properties and exports an array of FAQ objects. Each object provides common questions about HK Energy Solutions, covering available energy services, potential savings, and post-service support. The current array is a simple flat list but could be organized further for clarity or dynamic use.

**navLinks.ts:**

The \`navLinks.ts\` file in the \`resources\` folder defines the website's navigation structure.

This navlinks.ts defines the structure and data for a website's navigation menu. It first declares two TypeScript types: SubMenuLink for individual submenu items with name and href, and NavLink for main menu links, which can optionally include a submenu of SubMenuLink items. The navLinks array contains the main navigation items, including "Home," "About," "Contact," and "Services," with "Services" having a dropdown submenu listing specific service pages. Additionally, a NavButton type and navButton object define an optional navigation button labeled "Book Free Survey" with a link, which can be used for call-to-action purposes.

##### **services.ts:**

located inside 'resources folder'

This file defines and organizes all service-related data for the website in a structured way using TypeScript. It first declares reusable types (such as features, installation steps, FAQs, and overall service data) to keep the content consistent and type-safe. Then, it exports a services array where each object represents a complete service (like Solar PV, Heat Pumps, Insulation, EPCs, Battery Storage, and EV Charging), including hero content, benefits, how-it-works details, installation steps, call-to-action text, and FAQs. This centralized structure makes it easy to dynamically render service pages using the same components while only changing data. At the end, the findService function helps fetch a specific service based on the URL-friendly name, making routing and dynamic page loading simple and efficient.

##### **testimonial.ts**

Located inside \`resources folder\`

This testimonial.ts defines a reusable structure for displaying customer testimonials on the website. It declares a Testimonial type that includes a customer's name, an optional role, and their feedback. An array of testimonial objects is then exported, each representing a real user experience with HK Energy Solutions. This organized structure makes it easy to manage, update, and dynamically render testimonials in the UI, helping build trust and credibility through customer feedback.

##### **footer.ts**

located inside \`resources folder\`

This footer.ts organizes footer and navigation data for the website in a clean and reusable way. It defines structured types for services, quick links, and text content, then exports arrays that list service pages (like Solar PV, Heat Pumps, and Insulation) and important site links such as About, Contact, and FAQs. It also defines a contact section that includes address, phone number, and email, each paired with an icon from lucide-react. Overall, this setup keeps content separate from UI components, making the footer easy to manage, update, and render dynamically across the site.

# **globals.css:**

located inside \`app\` directory

This global.css file defines the core styling foundation of the project using Tailwind CSS with some custom enhancements. It starts by importing Tailwind and declaring a custom theme where primary, secondary, accent, and text colors are defined as CSS variables, allowing consistent color usage across the entire site. Reusable utility classes like .heading, .subHeading, and .normalText are created using @apply to standardize typography and maintain responsive font sizes.The file also includes UI improvements such as hiding default list markers for summary elements, adding a smooth animated underline effect on hover for links, and customizing the scrollbar to give it a clean, modern look. Overall, this global stylesheet ensures visual consistency, better user experience, and easier maintenance by centralizing common styles and design rules in one place.

# **layout.tsx:**

located inside \`app\` directory

In layout.tsx, we include components that are used consistently across the entire application-such as &lt;Navbar /&gt; and &lt;Footer /&gt;. Placing these globally ensures a unified structure, consistent user experience, and avoids repeating the same components on every individual page.

## **page.tsx:**

located inside \`app\` directory

This code defines the main **Home** page of the application using React. It imports several reusable components such as the banner, hero section, services, testimonials, FAQs, call-to-action banner, and contact form. Inside the Home function, these components are rendered in a clear top-to-bottom order to structure the homepage layout. The FAQ section receives its data through props, making it dynamic and reusable, while the CTA banner displays a strong message with a button to encourage user action. Overall, this file acts as the central layout for the homepage, combining all key sections to create a complete and well-organized user experience.

# **Public:**

Located inside the project folder 'hk-energy-solutions'

# **assets:**

located inside the "Public" folder

The assets folder contains all the images used across the website, including banners, icons, brand logos, and other visual elements.It serves as a centralized repository for media assets, ensuring organized file management and consistent usage throughout different pages and components of the site.

# **sitemap.ts**

located inside the \`app directory'.

**1)<https://www.speedfullauto.com/>**

**Page:** Home Page

When a user types the website <https://www.speedfullauto.com> in the browser or clicks on the logo, they are automatically directed to the Home Page. This is the main entry point of the website, which is why it has been assigned the highest priority (1.0).

**2)<https://www.speedfullauto.com/about>**

**Page:** About Us Page

When a user clicks on **"About"** in the header navigation or selects the link from the footer, this page opens. It contains the company's introduction, expertise, experience, and other essential background information.

**3) <https://www.speedfullauto.com/brands/audi>**

**Page:** Audi brand Page

**Navigation:**

Brands menu → Audi

**4) <https://www.speedfullauto.com/brands/bmw>**

**Page:** bmw brand Page

**Navigation:**

Brands menu → bmw

**5) <https://www.speedfullauto.com/brands/jaguar>**

**Page:** jaguar brand Page

**Navigation:**

Brands menu → Jaguar

**6) <https://www.speedfullauto.com/brands/meserati>**

**Page:** Meserati brand Page

**Navigation:**

Brands menu → Meserati

**7) <https://www.speedfullauto.com/brands/maybach>**

**Page:** Maybach brand Page

**Navigation:**

Brands menu → Maybach

**8) <https://www.speedfullauto.com/brands/mercedes>**

**Page:** Mercedes brand Page

**Navigation:**

Brands menu → Mercedes

**9) <https://www.speedfullauto.com/brands/prosche>**

**Page:** Prosche brand Page

**Navigation:**

Brands menu → Prosche

**10) <https://www.speedfullauto.com/brands/ferrari>**

**Page:** Ferrari brand Page

**Navigation:**

Brands menu → Ferrari

**11) <https://www.speedfullauto.com/brands/hyundai>**

**Page:** Hyundai brand Page

**Navigation:**

Brands menu → Hyundai

**12) <https://www.speedfullauto.com/brands/toyota>**

**Page:** Toyota brand Page

**Navigation:**

Brands menu → Toyota

**13) <https://www.speedfullauto.com/brands/lamborghini>**

**Page:** Lamborghini brand Page

**Navigation:**

Brands menu → Lamborghini

**14) <https://www.speedfullauto.com/brands/honda>**

**Page:** Honda brand Page

**Navigation:**

Brands menu → Honda

**15) <https://www.speedfullauto.com/brands/mazda>**

**Page:** Mazda brand Page

**Navigation:**

Brands menu → Mazda

**16) <https://www.speedfullauto.com/brands/mini-cooper>**

**Page:** Mini Cooper brand Page

**Navigation:**

Brands menu → Mini Cooper

**17) <https://www.speedfullauto.com/brands/volkswagen>**

**Page:** Volkswagen brand Page

**Navigation:**

Brands menu → Vlkswagen

**18) <https://www.speedfullauto.com/brands/pagani>**

**Page:** Pagani brand Page

**Navigation:**

Brands menu → Pagani

**19) <https://www.speedfullauto.com/brands/dodge>**

**Page:** Dodge brand Page

**Navigation:**

Brands menu → Dodge

**20) <https://www.speedfullauto.com/brands/bugatti>**

**Page:** Bugatti brand Page

**Navigation:**

Brands menu → Bugatti

**21) <https://www.speedfullauto.com/brands/jeep>**

**Page:** Jeep brand Page

**Navigation:**

Brands menu → Jeep

**22) <https://www.speedfullauto.com/brands/mclaren>**

**Page:** Mclaren brand Page

**Navigation:**

Brands menu → Mclaren

**23) <https://www.speedfullauto.com/brands/range-rover>**

**Page:** Range Rover brand Page

**Navigation:**

Brands menu → Range Rover

**24) <https://www.speedfullauto.com/brands/rolls-royce>**

**Page:** Rolls Royce brand Page

**Navigation:**

Brands menu → Rolls Roys

**Service Pages**

**1)<https://www.speedfullauto.com/services/radiator-repair-service>**

**Navigation:**  
Services → Radiator Repair

**2)** **<https://www.speedfullauto.com/services/ceramic-coating>**

**Navigation:**  
Services →Ceramic Coating

**3)<https://www.speedfullauto.com/services/ac-repair-maintenance>**

**Navigation:**  
Services → AC Repair and Maintenance

**4)<https://www.speedfullauto.com/services/engine-ecu-service>**

**Navigation:**  
Services → Engine & ECU Service

**5)<https://www.speedfullauto.com/services/brake-system-service>**

**Navigation:**  
Services → Brake System Service

**6)<https://www.speedfullauto.com/services/transmission-gearbox-repair>**

**Navigation:**  
Services → Transmission & Gearbox Repair

**7)<https://www.speedfullauto.com/services/suspension-steering-maintenance>**

**Navigation:**  
Services → Suspension & Steering Maintenance

**8)<https://www.speedfullauto.com/services/oil-change-fluid-checks>**

**Navigation:**  
Services → Oil Change & Fluid Checks

**9)<https://www.speedfullauto.com/services/electrical-comfort-systems>**

**Navigation:**  
Services → Electrical & Comfort Systems

**10)<https://www.speedfullauto.com/services/fuel-injection-service>**

**Navigation:**  
Services → Fuel Injection Service

**11)<https://www.speedfullauto.com/services/pre-purchase-inspection-diagnostics>**

**Navigation:**  
Services → Pre Purchase Inspection & Diagnostics

**12)<https://www.speedfullauto.com/services/performance-tuning-ecu-upgrade>**

**Navigation:**  
Services → Performance Tuning & ECU Upgrade

**13)<https://www.speedfullauto.com/services/paint-protection-coatings>**

**Navigation:**  
Services → Paint Protection & Coatings

**14)<https://www.speedfullauto.com/services/alloy-wheel-repair-refurbishment>**

**Navigation:**  
Services → Alloy Wheel Repair & Refurbishment Packages

**Additional Pages**

**1)<https://www.speedfullauto.com/packages>**

**Navigation:** Header Menu → Packages

**2)<https://www.speedfullauto.com/contact>**

**Navigation:** Header Menu → Contact

Footer → Contact

Buttons like "Book Now / Schedule Now"