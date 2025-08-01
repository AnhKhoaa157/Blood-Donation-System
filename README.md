<div id="top">

<!-- HEADER STYLE: CLASSIC -->
<div align="center">


# Blood-Donation-System

<em>Empowering Life Through Seamless Blood Donation Innovation</em>



<em>Built with the tools and technologies:</em>

<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
<img src="https://img.shields.io/badge/Markdown-000000.svg?style=flat&logo=Markdown&logoColor=white" alt="Markdown">
<img src="https://img.shields.io/badge/npm-CB3837.svg?style=flat&logo=npm&logoColor=white" alt="npm">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/Leaflet-199900.svg?style=flat&logo=Leaflet&logoColor=white" alt="Leaflet">
<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
<br>
<img src="https://img.shields.io/badge/Yarn-2C8EBB.svg?style=flat&logo=Yarn&logoColor=white" alt="Yarn">
<img src="https://img.shields.io/badge/XML-005FAD.svg?style=flat&logo=XML&logoColor=white" alt="XML">
<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=Vite&logoColor=white" alt="Vite">
<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=flat&logo=Axios&logoColor=white" alt="Axios">

</div>
<br>

---

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Testing](#testing)
- [Features](#features)
- [Project Structure](#project-structure)
    - [Project Index](#project-index)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

Blood-Donation-System is a full-stack developer tool that provides a robust backend API and a React-based frontend for managing blood donation activities, campaigns, and user interactions. It streamlines blood bank operations with secure, role-based access, comprehensive data models, and intuitive interfaces.

**Why Blood-Donation-System?**

This project aims to facilitate efficient blood donation management through scalable APIs and user-friendly dashboards. The core features include:

- 🩸 **API Endpoints:** For creating, updating, retrieving, and searching donation events, requests, and user data.
- 🔐 **Secure Authentication:** JWT-based security with role-based access control.
- 📊 **Rich Data Models:** Supporting donors, blood types, campaigns, notifications, and support tickets.
- 🖥️ **Admin & User Dashboards:** For inventory management, campaign oversight, and content moderation.
- ⚙️ **Frontend Integration:** React setup with role-based routing, media handling, and real-time notifications.
- 🚀 **Developer Focused:** Modular architecture designed for scalability and ease of maintenance.

---

## Features

|      | Component       | Details                                                                                     |
| :--- | :-------------- | :------------------------------------------------------------------------------------------ |
| ⚙️  | **Architecture**  | <ul><li>Java Spring Boot backend with REST API</li><li>React.js frontend with Vite</li><li>Separation of concerns between front-end and back-end</li><li>Uses MVC pattern for backend</li></ul> |
| 🔩 | **Code Quality**  | <ul><li>Consistent code style with ESLint and Prettier</li><li>TypeScript used in React components for type safety</li><li>Java code follows standard conventions, modularized into services and controllers</li></ul> |
| 📄 | **Documentation** | <ul><li>Basic README with project overview</li><li>API documentation generated via Swagger/OpenAPI</li><li>Comments and JSDoc in React components</li></ul> |
| 🔌 | **Integrations**  | <ul><li>Backend integrates with SQL database (likely MySQL or PostgreSQL)</li><li>Uses JWT for authentication (jjwt library)</li><li>Third-party APIs via Axios (e.g., map and chart libraries)</li></ul> |
| 🧩 | **Modularity**    | <ul><li>Frontend components are modular, using React component hierarchy</li><li>Backend services separated into distinct modules/controllers</li><li>Configuration files for environment-specific setups</li></ul> |
| 🧪 | **Testing**       | <ul><li>Unit tests in React using Jest and React Testing Library</li><li>Backend tests via JUnit and Mockito</li><li>CI/CD pipelines include automated tests</li></ul> |
| ⚡️  | **Performance**   | <ul><li>Uses Vite for fast frontend builds</li><li>Lazy loading React components</li><li>Backend optimized with connection pooling</li></ul> |
| 🛡️ | **Security**      | <ul><li>JWT tokens for authentication and authorization</li><li>Input validation and sanitization</li><li>Uses HTTPS and secure headers in deployment</li></ul> |
| 📦 | **Dependencies**  | <ul><li>Backend: Maven dependencies include jakarta.mail, jjwt, and SQL drivers</li><li>Frontend: React libraries, Ant Design, Axios, Leaflet, Recharts</li><li>Package management via npm and yarn</li></ul> |

---

## Project Structure

```sh
└── Blood-Donation-System/
    ├── Back-End
    │   └── hienmauapi-main
    ├── Front-End
    │   ├── .env
    │   ├── .gitignore
    │   ├── README.md
    │   ├── eslint.config.js
    │   ├── index.html
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── public
    │   ├── src
    │   ├── vite.config.js
    │   └── yarn.lock
    └── README.md
```

---

### Project Index

<details open>
	<summary><b><code>BLOOD-DONATION-SYSTEM/</code></b></summary>
	<!-- __root__ Submodule -->
	<details>
		<summary><b>__root__</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ __root__</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/README.md'>README.md</a></b></td>
					<td style='padding: 8px;'>- Provides the core API endpoints for managing blood donation activities within the system, enabling creation, updating, retrieval, and searching of donation events<br>- Serves as the backbone for organizing and tracking blood donation campaigns, supporting efficient management and data access to facilitate effective campaign execution and participant engagement.</td>
				</tr>
			</table>
		</blockquote>
	</details>
	<!-- Back-End Submodule -->
	<details>
		<summary><b>Back-End</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ Back-End</b></code>
			<!-- hienmauapi-main Submodule -->
			<details>
				<summary><b>hienmauapi-main</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ Back-End.hienmauapi-main</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/pom.xml'>pom.xml</a></b></td>
							<td style='padding: 8px;'>- Defines project dependencies and configuration for a Spring Boot-based backend focused on blood donation management<br>- Facilitates core functionalities such as user authentication, data persistence, and communication with a MySQL database, supporting secure and scalable API services within the overall architecture.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/dump-blooddonate-202506182219.sql'>dump-blooddonate-202506182219.sql</a></b></td>
							<td style='padding: 8px;'>- The provided SQL dump file serves as the foundational database schema and initial data setup for the Blood Donation backend system<br>- It defines the structure of the database, including tables, relationships, and constraints necessary to manage core entities such as donors, blood donations, and related records<br>- This file is essential for establishing a consistent and reliable data layer that supports the applications functionalities, ensuring data integrity and facilitating seamless integration with the backend API<br>- Overall, it underpins the entire data architecture of the blood donation platform, enabling efficient data management and retrieval within the broader system.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/README.md'>README.md</a></b></td>
							<td style='padding: 8px;'>- Provides backend API functionalities for managing blood donation activities, user authentication, requests, notifications, and content management within a secure, role-based system<br>- Supports efficient handling of blood donation events, requests, and user interactions, enabling seamless operation and data tracking for the entire blood donation platform.</td>
						</tr>
					</table>
					<!-- src Submodule -->
					<details>
						<summary><b>src</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ Back-End.hienmauapi-main.src</b></code>
							<!-- test Submodule -->
							<details>
								<summary><b>test</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ Back-End.hienmauapi-main.src.test</b></code>
									<!-- java Submodule -->
									<details>
										<summary><b>java</b></summary>
										<blockquote>
											<div class='directory-path' style='padding: 8px 0; color: #666;'>
												<code><b>⦿ Back-End.hienmauapi-main.src.test.java</b></code>
											<!-- org Submodule -->
											<details>
												<summary><b>org</b></summary>
												<blockquote>
													<div class='directory-path' style='padding: 8px 0; color: #666;'>
														<code><b>⦿ Back-End.hienmauapi-main.src.test.java.org</b></code>
													<!-- fpt Submodule -->
													<details>
														<summary><b>fpt</b></summary>
														<blockquote>
															<div class='directory-path' style='padding: 8px 0; color: #666;'>
																<code><b>⦿ Back-End.hienmauapi-main.src.test.java.org.fpt</b></code>
															<!-- blooddonate Submodule -->
															<details>
																<summary><b>blooddonate</b></summary>
																<blockquote>
																	<div class='directory-path' style='padding: 8px 0; color: #666;'>
																		<code><b>⦿ Back-End.hienmauapi-main.src.test.java.org.fpt.blooddonate</b></code>
																	<table style='width: 100%; border-collapse: collapse;'>
																	<thead>
																		<tr style='background-color: #f8f9fa;'>
																			<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
																			<th style='text-align: left; padding: 8px;'>Summary</th>
																		</tr>
																	</thead>
																		<tr style='border-bottom: 1px solid #eee;'>
																			<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/test/java/org/fpt/blooddonate/BlooddonateApplicationTests.java'>BlooddonateApplicationTests.java</a></b></td>
																			<td style='padding: 8px;'>- Validates the applications context loading within the overall backend architecture, ensuring that the Spring Boot environment initializes correctly<br>- Serves as a foundational test to confirm that core components and dependencies are properly configured, supporting reliable execution of other functional tests and maintaining system stability during development and deployment.</td>
																		</tr>
																	</table>
																</blockquote>
															</details>
														</blockquote>
													</details>
												</blockquote>
											</details>
										</blockquote>
									</details>
								</blockquote>
							</details>
							<!-- main Submodule -->
							<details>
								<summary><b>main</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ Back-End.hienmauapi-main.src.main</b></code>
									<!-- java Submodule -->
									<details>
										<summary><b>java</b></summary>
										<blockquote>
											<div class='directory-path' style='padding: 8px 0; color: #666;'>
												<code><b>⦿ Back-End.hienmauapi-main.src.main.java</b></code>
											<!-- org Submodule -->
											<details>
												<summary><b>org</b></summary>
												<blockquote>
													<div class='directory-path' style='padding: 8px 0; color: #666;'>
														<code><b>⦿ Back-End.hienmauapi-main.src.main.java.org</b></code>
													<!-- fpt Submodule -->
													<details>
														<summary><b>fpt</b></summary>
														<blockquote>
															<div class='directory-path' style='padding: 8px 0; color: #666;'>
																<code><b>⦿ Back-End.hienmauapi-main.src.main.java.org.fpt</b></code>
															<!-- blooddonate Submodule -->
															<details>
																<summary><b>blooddonate</b></summary>
																<blockquote>
																	<div class='directory-path' style='padding: 8px 0; color: #666;'>
																		<code><b>⦿ Back-End.hienmauapi-main.src.main.java.org.fpt.blooddonate</b></code>
																	<table style='width: 100%; border-collapse: collapse;'>
																	<thead>
																		<tr style='background-color: #f8f9fa;'>
																			<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
																			<th style='text-align: left; padding: 8px;'>Summary</th>
																		</tr>
																	</thead>
																		<tr style='border-bottom: 1px solid #eee;'>
																			<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/BlooddonateApplication.java'>BlooddonateApplication.java</a></b></td>
																			<td style='padding: 8px;'>- Initialize the Spring Boot application for the blood donation platform, serving as the entry point for the backend system<br>- It orchestrates the startup process, enabling the deployment of RESTful services and core functionalities essential for managing blood donation operations within the overall architecture.</td>
																		</tr>
																	</table>
																	<!-- middlewares Submodule -->
																	<details>
																		<summary><b>middlewares</b></summary>
																		<blockquote>
																			<div class='directory-path' style='padding: 8px 0; color: #666;'>
																				<code><b>⦿ Back-End.hienmauapi-main.src.main.java.org.fpt.blooddonate.middlewares</b></code>
																			<table style='width: 100%; border-collapse: collapse;'>
																			<thead>
																				<tr style='background-color: #f8f9fa;'>
																					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
																					<th style='text-align: left; padding: 8px;'>Summary</th>
																				</tr>
																			</thead>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/middlewares/JwtAuthenticationFilter.java'>JwtAuthenticationFilter.java</a></b></td>
																					<td style='padding: 8px;'>- Implements JWT-based authentication by intercepting incoming requests, validating tokens, and establishing user identity and roles within the security context<br>- Ensures secure access control across protected endpoints while allowing unauthenticated access to specific public routes, thereby maintaining the applications security architecture and user session management.</td>
																				</tr>
																			</table>
																		</blockquote>
																	</details>
																	<!-- configs Submodule -->
																	<details>
																		<summary><b>configs</b></summary>
																		<blockquote>
																			<div class='directory-path' style='padding: 8px 0; color: #666;'>
																				<code><b>⦿ Back-End.hienmauapi-main.src.main.java.org.fpt.blooddonate.configs</b></code>
																			<table style='width: 100%; border-collapse: collapse;'>
																			<thead>
																				<tr style='background-color: #f8f9fa;'>
																					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
																					<th style='text-align: left; padding: 8px;'>Summary</th>
																				</tr>
																			</thead>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/configs/SecurityConfig.java'>SecurityConfig.java</a></b></td>
																					<td style='padding: 8px;'>- Defines security configurations for the backend, establishing authentication and authorization policies<br>- Implements JWT-based authentication, manages CORS settings for frontend integrations, and disables CSRF protection to facilitate secure API access<br>- Ensures that incoming requests are appropriately filtered and authenticated, supporting the overall security architecture of the blood donation platform.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/configs/AppConfig.java'>AppConfig.java</a></b></td>
																					<td style='padding: 8px;'>- Defines core application constants and status codes for the blood donation system, facilitating consistent reference across the codebase<br>- It centralizes key identifiers related to user roles, donation activities, and request statuses, supporting seamless communication and state management within the overall architecture<br>- This configuration enhances maintainability and clarity throughout the backend services.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/configs/WebConfig.java'>WebConfig.java</a></b></td>
																					<td style='padding: 8px;'>- Configures static resource handling to serve uploaded files from the servers file system, enabling seamless access to user-uploaded content within the blood donation web application<br>- This setup ensures that uploaded images or documents are accessible via specified URL paths, supporting efficient management and retrieval of media assets across the platform.</td>
																				</tr>
																			</table>
																		</blockquote>
																	</details>
																	<!-- models Submodule -->
																	<details>
																		<summary><b>models</b></summary>
																		<blockquote>
																			<div class='directory-path' style='padding: 8px 0; color: #666;'>
																				<code><b>⦿ Back-End.hienmauapi-main.src.main.java.org.fpt.blooddonate.models</b></code>
																			<table style='width: 100%; border-collapse: collapse;'>
																			<thead>
																				<tr style='background-color: #f8f9fa;'>
																					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
																					<th style='text-align: left; padding: 8px;'>Summary</th>
																				</tr>
																			</thead>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/models/Notification.java'>Notification.java</a></b></td>
																					<td style='padding: 8px;'>- Defines the Notification entity within the backend architecture, representing alerts or announcements related to blood donation activities<br>- It facilitates storage and management of notification details such as title, content, images, creator, and active period, supporting the applications communication features and ensuring timely, organized dissemination of information to users.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/models/BloodDonationActivity.java'>BloodDonationActivity.java</a></b></td>
																					<td style='padding: 8px;'>- Defines the BloodDonationActivity entity, representing organized blood donation events within the system<br>- It encapsulates event details such as schedule, location, capacity, and status, while establishing relationships with users and donation requests<br>- Serves as a core component for managing and tracking blood donation activities, supporting the applications functionality for coordinating and monitoring blood donation campaigns.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/models/Blood.java'>Blood.java</a></b></td>
																					<td style='padding: 8px;'>- Defines the Blood entity representing blood group data within the backend architecture<br>- It manages core attributes such as name, description, status, and timestamps for creation and updates, facilitating efficient storage, retrieval, and management of blood group information essential for the blood donation system<br>- This model integrates seamlessly with the database layer to support application functionalities.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/models/BloodReceiveRequest.java'>BloodReceiveRequest.java</a></b></td>
																					<td style='padding: 8px;'>- Defines the data model for blood donation requests within the backend architecture, encapsulating all relevant details such as recipient information, blood type, quantity, status, and medical background<br>- Serves as a core component for managing and tracking blood receive requests, facilitating seamless integration with database operations and supporting the overall blood donation management system.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/models/Blog.java'>Blog.java</a></b></td>
																					<td style='padding: 8px;'>- Defines the Blog entity within the backend architecture, representing individual blog posts in the application<br>- It facilitates content management by capturing essential attributes such as title, content, category, view count, creator, status, and timestamps for creation and updates<br>- Serves as a core component for handling blog-related data and interactions in the overall system.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/models/BloodDonationRequest.java'>BloodDonationRequest.java</a></b></td>
																					<td style='padding: 8px;'>- Defines the data model for blood donation requests within the backend architecture, encapsulating all relevant details such as donor information, donation schedule, health status, approval workflow, and request status<br>- Serves as a core component for managing and tracking blood donation activities, ensuring data consistency and facilitating seamless integration with other system modules.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/models/User.java'>User.java</a></b></td>
																					<td style='padding: 8px;'>- Defines the User entity within the backend architecture, encapsulating user-related data such as personal details, authentication credentials, blood type, and role information<br>- Serves as a core model for managing user profiles, supporting functionalities like registration, authentication, and user management in the blood donation platform<br>- Facilitates data persistence and relational mapping with associated entities.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/models/CompatibleBlood.java'>CompatibleBlood.java</a></b></td>
																					<td style='padding: 8px;'>- Defines the compatibility relationships between different blood types within the blood donation system, enabling the application to determine suitable blood matches for transfusions<br>- Serves as a core component for managing blood compatibility data, ensuring accurate and efficient matching processes in the overall blood donation architecture.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/models/BloodUnitWareHouse.java'>BloodUnitWareHouse.java</a></b></td>
																					<td style='padding: 8px;'>- Defines the data model for blood units stored in the warehouse, capturing essential details such as blood type, components, storage location, collection and expiration dates, and status<br>- Serves as a core component within the backend architecture to manage inventory, track blood unit lifecycle, and facilitate inventory operations in the blood donation management system.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/models/BlogCategory.java'>BlogCategory.java</a></b></td>
																					<td style='padding: 8px;'>- Defines the BlogCategory entity within the backend architecture, representing categories for blog posts in the application<br>- It facilitates structured management of blog classifications, including titles, content, status, and timestamps for creation and updates, supporting content organization and retrieval in the overall system.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/models/EmployeeInformation.java'>EmployeeInformation.java</a></b></td>
																					<td style='padding: 8px;'>- Defines the EmployeeInformation entity representing staff details within the applications data model<br>- It facilitates storage and management of employee-specific data such as position, department, employment status, and associated user information, supporting core HR and personnel management functionalities in the overall system architecture.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/models/SupportTicket.java'>SupportTicket.java</a></b></td>
																					<td style='padding: 8px;'>- Defines the SupportTicket entity representing user support requests within the applications architecture<br>- Facilitates tracking, managing, and updating support inquiries, including user details, status, and history<br>- Integrates with user data and support history, enabling efficient support ticket lifecycle management and ensuring comprehensive support request documentation across the system.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/models/SupportTicketHistory.java'>SupportTicketHistory.java</a></b></td>
																					<td style='padding: 8px;'>- Defines the SupportTicketHistory entity, capturing the chronological record of interactions and status updates related to support tickets within the blood donation platform<br>- It facilitates tracking support activities, supporting audit trails, and managing ticket lifecycle states, thereby ensuring transparent and organized support management across the system architecture.</td>
																				</tr>
																			</table>
																		</blockquote>
																	</details>
																	<!-- exceptions Submodule -->
																	<details>
																		<summary><b>exceptions</b></summary>
																		<blockquote>
																			<div class='directory-path' style='padding: 8px 0; color: #666;'>
																				<code><b>⦿ Back-End.hienmauapi-main.src.main.java.org.fpt.blooddonate.exceptions</b></code>
																			<table style='width: 100%; border-collapse: collapse;'>
																			<thead>
																				<tr style='background-color: #f8f9fa;'>
																					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
																					<th style='text-align: left; padding: 8px;'>Summary</th>
																				</tr>
																			</thead>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/exceptions/GlobalExceptionHandler.java'>GlobalExceptionHandler.java</a></b></td>
																					<td style='padding: 8px;'>- Provides centralized handling of application-wide exceptions to ensure consistent error responses across the backend API<br>- It captures validation errors and response status exceptions, translating them into structured HTTP responses that facilitate easier debugging and improved client-side error management within the overall system architecture.</td>
																				</tr>
																			</table>
																		</blockquote>
																	</details>
																	<!-- controllers Submodule -->
																	<details>
																		<summary><b>controllers</b></summary>
																		<blockquote>
																			<div class='directory-path' style='padding: 8px 0; color: #666;'>
																				<code><b>⦿ Back-End.hienmauapi-main.src.main.java.org.fpt.blooddonate.controllers</b></code>
																			<table style='width: 100%; border-collapse: collapse;'>
																			<thead>
																				<tr style='background-color: #f8f9fa;'>
																					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
																					<th style='text-align: left; padding: 8px;'>Summary</th>
																				</tr>
																			</thead>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/controllers/AdminBloodUnitWareHouseController.java'>AdminBloodUnitWareHouseController.java</a></b></td>
																					<td style='padding: 8px;'>- Provides administrative endpoints for managing blood unit inventory within the warehouse, enabling retrieval, status updates, testing, and cancellation of blood units<br>- Integrates with the service layer to facilitate key operations, supporting efficient inventory control and ensuring accurate tracking of blood units throughout their lifecycle in the blood donation system.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/controllers/DashBoardController.java'>DashBoardController.java</a></b></td>
																					<td style='padding: 8px;'>- Provides an API endpoint for aggregating key dashboard metrics related to blood donation management, including counts of requests, inventory, users, activities, and content<br>- Facilitates comprehensive data analysis for administrative oversight, supporting strategic decision-making within the overall system architecture.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/controllers/AdminCompatibleBloodController.java'>AdminCompatibleBloodController.java</a></b></td>
																					<td style='padding: 8px;'>- Defines administrative endpoints for managing compatible blood records, enabling creation and status updates within the blood donation system<br>- Facilitates backend operations related to blood compatibility, supporting the overall architecture by ensuring efficient management of blood compatibility data through RESTful APIs<br>- This controller integrates with service layers to maintain data integrity and streamline administrative workflows.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/controllers/BlogCategoryController.java'>BlogCategoryController.java</a></b></td>
																					<td style='padding: 8px;'>- Defines RESTful endpoints for managing blog categories within the backend architecture, enabling creation, retrieval, updating, and deletion of categories<br>- Facilitates organized content classification and efficient category management, integrating with the service layer to support the overall content management system of the application<br>- Ensures seamless interaction between client requests and backend data operations for blog categorization.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/controllers/BloodReceiveRequestController.java'>BloodReceiveRequestController.java</a></b></td>
																					<td style='padding: 8px;'>- Facilitates management of blood receive requests within the system by providing endpoints for creating, retrieving, updating, and canceling requests<br>- Integrates user authentication to ensure request-specific operations and enables access to available blood units in the warehouse, supporting efficient blood donation and inventory workflows in the overall architecture.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/controllers/BloodDonationRequestController.java'>BloodDonationRequestController.java</a></b></td>
																					<td style='padding: 8px;'>- Facilitates management of blood donation requests by providing endpoints for retrieving, creating, updating, and canceling requests<br>- Integrates with user authentication to ensure requests are associated with the correct user, supporting seamless interaction within the broader blood donation platform<br>- Serves as a key component in orchestrating user-initiated blood donation workflows within the backend architecture.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/controllers/UserController.java'>UserController.java</a></b></td>
																					<td style='padding: 8px;'>- Provides RESTful endpoints for managing user data within the application, including retrieval, creation, and deletion of user records<br>- Facilitates user-related operations such as listing users with filtering options, fetching individual user details, locating nearby users, and creating employee profiles<br>- Integrates with user and employee services to support core user management functionalities aligned with the overall backend architecture.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/controllers/AuthController.java'>AuthController.java</a></b></td>
																					<td style='padding: 8px;'>- Handles user authentication and profile management by exposing endpoints for login, registration, password changes, and profile updates<br>- Integrates with the authentication service to facilitate secure user access and account modifications, serving as a central controller within the backend architecture to streamline user-related operations.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/controllers/AdminBloodDonationRequestController.java'>AdminBloodDonationRequestController.java</a></b></td>
																					<td style='padding: 8px;'>- Facilitates administrative management of blood donation requests by providing endpoints for retrieving, filtering, and updating request statuses<br>- Supports viewing all requests, filtering by user or status, and performing actions such as approval, rejection, and completion<br>- Integrates with the service layer to ensure proper handling of donation request workflows within the overall blood donation platform architecture.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/controllers/SupportTicketController.java'>SupportTicketController.java</a></b></td>
																					<td style='padding: 8px;'>- Facilitates management of support tickets within the application by providing endpoints for retrieving, creating, and updating ticket statuses<br>- Integrates with the support ticket service layer to enable efficient handling of user inquiries and issue tracking, supporting the overall architectures goal of delivering responsive customer support functionality.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/controllers/BloodDonationActivityController.java'>BloodDonationActivityController.java</a></b></td>
																					<td style='padding: 8px;'>- Defines RESTful endpoints for managing blood donation activities, enabling creation, retrieval, updating, and detailed viewing of activities within the backend architecture<br>- Serves as the primary interface for client interactions with blood donation event data, integrating with service layer logic to facilitate seamless data operations and support the overall blood donation management system.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/controllers/BlogController.java'>BlogController.java</a></b></td>
																					<td style='padding: 8px;'>- Defines RESTful endpoints for managing blog content within the application, enabling creation, retrieval, updating, and deletion of blog posts<br>- Integrates with the service layer to handle business logic, supporting features like pagination, filtering, and detailed error handling<br>- Serves as the primary interface for client interactions with blog data, ensuring seamless content management within the overall system architecture.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/controllers/NotificationController.java'>NotificationController.java</a></b></td>
																					<td style='padding: 8px;'>- Provides RESTful endpoints for managing notifications within the application, enabling creation, retrieval, updating, and deletion of notification records<br>- Integrates with the notification service layer to facilitate efficient handling of notification data, supporting features like pagination, filtering by status or keyword, and active notifications<br>- Serves as a key interface for notification-related operations in the overall backend architecture.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/controllers/CompatibleBloodController.java'>CompatibleBloodController.java</a></b></td>
																					<td style='padding: 8px;'>- Provides RESTful endpoints to retrieve compatibility information between blood types, supporting queries for all compatible bloods and those suitable for receiving blood<br>- Integrates with the blood compatibility service to facilitate accurate matching, playing a crucial role in the blood donation systems architecture by enabling efficient and reliable blood type compatibility checks.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/controllers/BloodController.java'>BloodController.java</a></b></td>
																					<td style='padding: 8px;'>- Defines RESTful endpoints for managing blood donation records, enabling retrieval, creation, updating, and deletion of blood data<br>- Serves as the primary interface between client requests and the underlying blood management services, facilitating seamless interaction with the blood donation data within the overall backend architecture.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/controllers/AdminBloodReceiveRequestController.java'>AdminBloodReceiveRequestController.java</a></b></td>
																					<td style='padding: 8px;'>- Manages administrative operations for blood receive requests, including retrieval, status updates, and detailed views<br>- Facilitates approval, rejection, and completion workflows, while providing access to associated blood unit data within the blood donation system architecture<br>- Ensures seamless handling of blood request lifecycle events, supporting efficient inventory and request management.</td>
																				</tr>
																			</table>
																		</blockquote>
																	</details>
																	<!-- services Submodule -->
																	<details>
																		<summary><b>services</b></summary>
																		<blockquote>
																			<div class='directory-path' style='padding: 8px 0; color: #666;'>
																				<code><b>⦿ Back-End.hienmauapi-main.src.main.java.org.fpt.blooddonate.services</b></code>
																			<table style='width: 100%; border-collapse: collapse;'>
																			<thead>
																				<tr style='background-color: #f8f9fa;'>
																					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
																					<th style='text-align: left; padding: 8px;'>Summary</th>
																				</tr>
																			</thead>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/services/BloodUnitWareHouseService.java'>BloodUnitWareHouseService.java</a></b></td>
																					<td style='padding: 8px;'>- Manages blood unit inventory within the warehouse, enabling retrieval, status updates, testing results, and cancellations<br>- Facilitates efficient tracking of blood units through various stages, ensuring proper handling and compliance with testing protocols<br>- Supports overall blood donation operations by maintaining accurate records and streamlining workflow processes in the blood bank system.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/services/BlogCategoryService.java'>BlogCategoryService.java</a></b></td>
																					<td style='padding: 8px;'>- Manages blog category data within the application, enabling retrieval, creation, updating, and soft deletion of categories<br>- Facilitates organized content classification and ensures consistent handling of blog categories across the platform, supporting the overall content management architecture.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/services/BloodReceiveRequestService.java'>BloodReceiveRequestService.java</a></b></td>
																					<td style='padding: 8px;'>- Manages blood receive requests within the blood donation system, facilitating creation, updates, status transitions, and cancellations<br>- Ensures proper allocation of blood units, maintains request lifecycle integrity, and communicates status changes via email notifications<br>- Integrates with repositories to handle data persistence and enforces business rules to support efficient blood donation and transfusion workflows.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/services/SupportTicketService.java'>SupportTicketService.java</a></b></td>
																					<td style='padding: 8px;'>- Manages support ticket lifecycle within the application, enabling creation, retrieval, and status updates<br>- Facilitates communication between users and support staff by maintaining ticket histories and sending email notifications<br>- Integrates with user and support ticket repositories to ensure data consistency, supporting efficient handling of user inquiries and issue tracking across the platform.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/services/BloodDonationActivityService.java'>BloodDonationActivityService.java</a></b></td>
																					<td style='padding: 8px;'>- Manages blood donation activities by facilitating creation, retrieval, updating, and listing of donation events<br>- Ensures proper access control, maintains activity details, and integrates with repositories for data persistence<br>- Serves as a core component in orchestrating blood donation workflows within the backend architecture, supporting efficient management of donation campaigns and participant coordination.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/services/BlogService.java'>BlogService.java</a></b></td>
																					<td style='padding: 8px;'>- Provides core functionalities for managing blog content within the application, including creating, updating, retrieving, and soft-deleting blog posts<br>- Facilitates interaction with blog categories and handles media uploads, supporting the overall content management architecture<br>- Ensures seamless integration of blog operations with data persistence and media storage, contributing to the platforms content delivery and user engagement features.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/services/NotificationService.java'>NotificationService.java</a></b></td>
																					<td style='padding: 8px;'>- Manages notification lifecycle within the application, including creation, retrieval, updating, and soft deletion<br>- Facilitates handling of notification data, associated media uploads, and ensures proper user attribution<br>- Integrates with repositories to support paginated and active notifications, serving as a core component for disseminating timely information to users across the platform.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/services/BloodDonationRequestService.java'>BloodDonationRequestService.java</a></b></td>
																					<td style='padding: 8px;'>- Manages blood donation requests by facilitating creation, updates, approvals, rejections, cancellations, and completions within the system<br>- Ensures proper workflow, enforces status transitions, updates related inventory, and triggers email notifications, thereby supporting the overall blood donation process and maintaining data integrity across the applications architecture.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/services/BloodService.java'>BloodService.java</a></b></td>
																					<td style='padding: 8px;'>- Manages blood type data within the system, enabling retrieval, creation, updating, and soft deletion of blood records<br>- Facilitates core operations for maintaining accurate blood inventory information, supporting the broader blood donation platforms functionality by ensuring consistent and reliable blood type management across the application.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/services/UserService.java'>UserService.java</a></b></td>
																					<td style='padding: 8px;'>- Provides user management and location-based functionalities within the blood donation platform, enabling retrieval, filtering, and updating of user data<br>- Facilitates matching users based on blood compatibility and proximity, supporting the overall systems goal of connecting donors and recipients efficiently<br>- Serves as a core service layer integrating user information with blood compatibility and geolocation features.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/services/CompatibleBloodService.java'>CompatibleBloodService.java</a></b></td>
																					<td style='padding: 8px;'>- Manages blood compatibility relationships by providing functionalities to retrieve, create, and update compatibility records between blood types<br>- Ensures data integrity through validation checks and maintains accurate mappings of compatible and receivable blood groups, supporting the core blood donation matching process within the overall system architecture.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/services/AuthService.java'>AuthService.java</a></b></td>
																					<td style='padding: 8px;'>- Handles user authentication and profile management within the blood donation platform<br>- Facilitates user login, registration, password changes, and profile updates, ensuring secure access and data consistency<br>- Integrates with user and blood repositories to validate and persist user information, supporting the overall architecture of user identity and access control in the system.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/services/EmployeeService.java'>EmployeeService.java</a></b></td>
																					<td style='padding: 8px;'>- Facilitates the creation of new employee accounts by validating input data, ensuring unique identifiers, and integrating user and employee information into the system<br>- It supports the broader architecture of user management and authentication within the backend, enabling seamless onboarding of employees while maintaining data integrity and security.</td>
																				</tr>
																			</table>
																		</blockquote>
																	</details>
																	<!-- utils Submodule -->
																	<details>
																		<summary><b>utils</b></summary>
																		<blockquote>
																			<div class='directory-path' style='padding: 8px 0; color: #666;'>
																				<code><b>⦿ Back-End.hienmauapi-main.src.main.java.org.fpt.blooddonate.utils</b></code>
																			<table style='width: 100%; border-collapse: collapse;'>
																			<thead>
																				<tr style='background-color: #f8f9fa;'>
																					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
																					<th style='text-align: left; padding: 8px;'>Summary</th>
																				</tr>
																			</thead>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/utils/SendEmail.java'>SendEmail.java</a></b></td>
																					<td style='padding: 8px;'>- The <code>SendEmail.java</code> utility class is responsible for facilitating email notifications within the blood donation management system<br>- It primarily handles sending status update emails related to blood donation and reception requests, ensuring users are promptly informed about changes to their requests<br>- This component integrates with the broader backend architecture to support real-time communication and enhance user engagement by automating email alerts based on request status updates.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/utils/KetQuaXetNghiem.java'>KetQuaXetNghiem.java</a></b></td>
																					<td style='padding: 8px;'>- Defines a data structure representing medical test results and vital signs within the blood donation management system<br>- It encapsulates key health metrics and symptoms, facilitating the storage, transfer, and processing of patient health data to support medical assessments and decision-making processes across the applications architecture.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/utils/AuthUtil.java'>AuthUtil.java</a></b></td>
																					<td style='padding: 8px;'>- Provides utility functions for generating, validating, and extracting user information from JSON Web Tokens (JWTs), enabling secure authentication and authorization within the backend architecture<br>- It centralizes token management, ensuring consistent security practices across the application’s user authentication processes<br>- This component is essential for maintaining user session integrity and role-based access control throughout the system.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/utils/ThongTinHienMau.java'>ThongTinHienMau.java</a></b></td>
																					<td style='padding: 8px;'>- Defines a data structure for capturing detailed blood donation information, including health status, risk factors, medication use, vital signs, and test results<br>- Serves as a foundational component within the backend architecture to facilitate accurate recording, processing, and retrieval of donor health data, supporting the overall blood donation management systems integrity and decision-making processes.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/utils/TextUtil.java'>TextUtil.java</a></b></td>
																					<td style='padding: 8px;'>- Provides a utility function to normalize Vietnamese text by removing diacritical marks and accents, facilitating consistent text processing across the backend system<br>- Enhances data standardization and searchability within the blood donation platform, supporting features that require uniform text handling, such as user input validation, search queries, and data storage.</td>
																				</tr>
																			</table>
																		</blockquote>
																	</details>
																	<!-- dtos Submodule -->
																	<details>
																		<summary><b>dtos</b></summary>
																		<blockquote>
																			<div class='directory-path' style='padding: 8px 0; color: #666;'>
																				<code><b>⦿ Back-End.hienmauapi-main.src.main.java.org.fpt.blooddonate.dtos</b></code>
																			<!-- responses Submodule -->
																			<details>
																				<summary><b>responses</b></summary>
																				<blockquote>
																					<div class='directory-path' style='padding: 8px 0; color: #666;'>
																						<code><b>⦿ Back-End.hienmauapi-main.src.main.java.org.fpt.blooddonate.dtos.responses</b></code>
																					<table style='width: 100%; border-collapse: collapse;'>
																					<thead>
																						<tr style='background-color: #f8f9fa;'>
																							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
																							<th style='text-align: left; padding: 8px;'>Summary</th>
																						</tr>
																					</thead>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/responses/AnalysisResponseDTO.java'>AnalysisResponseDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Provides a comprehensive data transfer object for summarizing key metrics within the blood donation management system<br>- It encapsulates aggregate counts related to blood requests, donations, inventory, activities, and user roles, facilitating efficient data exchange and reporting across the applications components<br>- This structure supports high-level insights essential for monitoring and decision-making within the overall architecture.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/responses/LoginResponseDTO.java'>LoginResponseDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Facilitates user authentication responses by encapsulating user details and access tokens<br>- Serves as a data transfer object within the backend architecture to securely transmit login information to clients, supporting seamless integration between authentication processes and client-side applications in the blood donation system.</td>
																						</tr>
																					</table>
																				</blockquote>
																			</details>
																			<!-- requests Submodule -->
																			<details>
																				<summary><b>requests</b></summary>
																				<blockquote>
																					<div class='directory-path' style='padding: 8px 0; color: #666;'>
																						<code><b>⦿ Back-End.hienmauapi-main.src.main.java.org.fpt.blooddonate.dtos.requests</b></code>
																					<table style='width: 100%; border-collapse: collapse;'>
																					<thead>
																						<tr style='background-color: #f8f9fa;'>
																							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
																							<th style='text-align: left; padding: 8px;'>Summary</th>
																						</tr>
																					</thead>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/UpdateBlogCategoryRequestDTO.java'>UpdateBlogCategoryRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines the data transfer object for updating blog categories, encapsulating the necessary fields for title and content<br>- Serves as a validation layer within the backend API, ensuring that incoming requests for modifying blog categories contain the required information<br>- Integrates into the overall architecture to facilitate structured and validated data flow during blog management operations.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/CreateBloodDonationActivityRequestDTO.java'>CreateBloodDonationActivityRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines the data structure for creating a new blood donation activity, encapsulating essential details such as name, start and end dates, location, description, and maximum participant capacity<br>- Serves as a request DTO within the backend API, facilitating data validation and transfer for initiating blood donation events in the overall system architecture.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/UpdateBloodDonationActivityRequestDTO.java'>UpdateBloodDonationActivityRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines a data transfer object for updating blood donation activities, encapsulating essential details such as name, start and end dates, location, description, status, and maximum participant capacity<br>- Facilitates seamless validation and data handling within the backend architecture, ensuring consistent and reliable updates to blood donation event records across the system.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/ChangeStatusDonationRequestDTO.java'>ChangeStatusDonationRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Facilitates updating the status of blood donation requests by encapsulating relevant details such as notes and examination forms<br>- Integrates into the backend workflow to ensure accurate tracking and management of donation statuses within the overall blood donation system architecture<br>- Supports seamless communication between client requests and server-side processing for status modifications.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/ChangePasswordRequestDTO.java'>ChangePasswordRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines the data structure for handling user password change requests within the backend API<br>- Facilitates secure and validated transmission of current and new passwords, supporting user account management and security workflows in the overall blood donation system architecture<br>- Ensures consistent request formatting and validation across the application.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/UpdateNotificationRequestDTO.java'>UpdateNotificationRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines the data transfer object for updating notifications within the blood donation platform, encapsulating notification details such as title, content, associated image, start date, and end date<br>- Facilitates structured data exchange between client requests and server-side processing, ensuring validation and consistency in notification management across the applications architecture.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/UpdateBloodRequestDTO.java'>UpdateBloodRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines the data transfer object for updating blood donation requests, encapsulating essential fields such as name and description<br>- Serves as a validation layer to ensure data integrity during update operations within the backend architecture, facilitating seamless communication between client requests and server processing in the blood donation management system.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/RegisterRequestDTO.java'>RegisterRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines the data structure for user registration requests within the blood donation platform, capturing essential personal and health information<br>- It facilitates user onboarding by standardizing input validation and data transfer, ensuring consistent and secure registration processes across the applications architecture.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/CreateEmployeeRequestDTO.java'>CreateEmployeeRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines the data structure for creating new employee records within the backend system, facilitating user input validation and data transfer during employee onboarding<br>- It ensures consistent and accurate capture of essential employee information, supporting the overall architecture of managing personnel data in the blood donation management platform.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/CreateBlogCategoryRequestDTO.java'>CreateBlogCategoryRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines the data transfer object for creating blog categories, encapsulating the necessary input fields with validation constraints<br>- It facilitates structured data exchange between client requests and server processing within the backend architecture, supporting the functionality for managing blog content categories in the application.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/LoginRequestDTO.java'>LoginRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines the data transfer object for login requests, encapsulating user credentials with validation constraints<br>- Facilitates secure and structured communication between client and server during authentication processes within the backend architecture of the blood donation application<br>- Ensures proper data handling and validation for user login operations across the system.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/CompleteReceiveRequestDTO.java'>CompleteReceiveRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines the data transfer object for completing a blood donation reception, encapsulating the necessary form information<br>- It facilitates validation and data consistency within the backend API, supporting the overall architecture by ensuring structured communication between client requests and server processing during the blood donation workflow.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/CancelBloodUnitWareHouseRequestDTO.java'>CancelBloodUnitWareHouseRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines the data transfer object for canceling a blood unit in the warehouse, encapsulating the necessary cancellation note<br>- Integrates into the backend API to facilitate blood inventory management workflows, ensuring proper validation and structured data exchange during cancellation requests within the blood donation system.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/UpdateReceiveDonationRequestDTO.java'>UpdateReceiveDonationRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines a Data Transfer Object (DTO) for updating blood donation reception details, encapsulating key information such as donation date, blood type, components, quantity, location, health status, and urgency<br>- Serves as a structured request payload within the backend architecture to facilitate accurate and validated updates to donation records in the system.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/UpdateStatusCompatibleBlood.java'>UpdateStatusCompatibleBlood.java</a></b></td>
																							<td style='padding: 8px;'>- Defines a data transfer object for updating the compatibility status of blood donations within the backend system<br>- It facilitates validation and structured data exchange, enabling seamless updates to blood compatibility statuses, which are essential for managing blood donation records and ensuring safe transfusion processes in the overall architecture.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/CreateReceiveDonationRequestDTO.java'>CreateReceiveDonationRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines the data structure for creating a blood donation reception request, encapsulating essential details such as donation date, blood type, components needed, quantity, health status, and location<br>- Serves as a key component in the backend to facilitate accurate and validated data transfer for processing blood donation reception operations within the overall blood donation management system.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/CreateCompatibleBloodDTO.java'>CreateCompatibleBloodDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines the data transfer object for creating blood compatibility records, encapsulating donor and recipient blood group information<br>- Facilitates validation and data handling within the blood donation system, ensuring accurate and consistent communication of blood compatibility details across the applications backend architecture<br>- Supports seamless integration of blood compatibility logic into the overall blood donation management process.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/CreateBloodRequestDTO.java'>CreateBloodRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines the data transfer object for creating new blood donation requests, encapsulating essential information such as the requesters name and description<br>- Serves as a structured input for API endpoints, facilitating validation and data consistency within the overall blood donation management system<br>- Ensures smooth communication between client requests and backend processing.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/UpdateStatusSupportTicketRequestDTO.java'>UpdateStatusSupportTicketRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines the data structure for updating support ticket statuses within the backend system, facilitating status changes and notes updates<br>- Integrates with the overall support management workflow, enabling consistent and validated communication of ticket status modifications across the application<br>- Supports seamless handling of support ticket lifecycle events in the blood donation platform.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/CreateBlogRequestDTO.java'>CreateBlogRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines the data transfer object for creating a new blog post, encapsulating essential information such as title, content, image, and category<br>- Facilitates structured data exchange between client requests and backend processing within the overall blood donation platform architecture, ensuring proper validation and data integrity during blog creation workflows.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/UpdateProfileRequestDTO.java'>UpdateProfileRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines the data structure for updating user profiles within the blood donation platform, capturing essential personal and health information<br>- It facilitates seamless profile modifications by ensuring data validation and consistency, supporting the overall architectures goal of maintaining accurate, up-to-date donor records for efficient management and communication.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/UpdateBloodDonationRequestDTO.java'>UpdateBloodDonationRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines the data structure for updating blood donation records, ensuring validation of key donor information such as donation date, recovery period, health status, and donation type<br>- Integrates into the backend API to facilitate accurate and consistent modifications of blood donation data, supporting the overall systems goal of managing blood donor information efficiently and reliably.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/UpdateBlogRequestDTO.java'>UpdateBlogRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines the data transfer object for updating blog posts, encapsulating title, content, optional image, and category information<br>- Facilitates validation and data handling within the backend API, supporting seamless blog content modifications in the overall system architecture<br>- Ensures consistent data structure for client-server communication during blog update operations.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/CreateSupportTicketRequestDTO.java'>CreateSupportTicketRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines the data structure for creating support tickets within the backend system, capturing essential user information such as name, email, phone number, subject, and content<br>- It facilitates user-initiated support requests, enabling efficient handling and tracking of customer inquiries as part of the overall customer support architecture.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/CompleteDonationRequestDTO.java'>CompleteDonationRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines the data transfer object for completing a blood donation, encapsulating storage location and examination form details<br>- It facilitates structured data exchange during the donation process, supporting validation and integration within the backend architecture of the blood donation system<br>- This DTO ensures consistent and reliable communication between client requests and server-side operations.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/TestedBloodUnitWareHouseRequestDTO.java'>TestedBloodUnitWareHouseRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines the data transfer object for submitting tested blood unit information to the warehouse management system, ensuring validation of critical fields such as test results and expiration date<br>- Integrates into the broader backend architecture to facilitate accurate tracking and handling of blood units post-testing, supporting reliable inventory management and blood safety protocols.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/CreateBloodDonationRequestDTO.java'>CreateBloodDonationRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines the data structure for creating blood donation requests, encapsulating essential donor and donation details<br>- It ensures input validation and standardization of data related to blood donation activities, facilitating seamless integration within the backend architecture to support donation management workflows<br>- This DTO plays a crucial role in capturing user input accurately for processing donation records.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/CreateNotificationRequestDTO.java'>CreateNotificationRequestDTO.java</a></b></td>
																							<td style='padding: 8px;'>- Defines the data structure for creating notifications within the blood donation platform, encapsulating essential details such as title, content, image, start date, and end date<br>- Facilitates the transfer of notification data from client requests to backend processing, supporting the systems communication and user engagement functionalities.</td>
																						</tr>
																						<tr style='border-bottom: 1px solid #eee;'>
																							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/dtos/requests/ChangeStatusBloodReceiveRequestToAvailable.java'>ChangeStatusBloodReceiveRequestToAvailable.java</a></b></td>
																							<td style='padding: 8px;'>- Facilitates updating the status of blood units to available within the blood donation management system<br>- It encapsulates a list of blood unit identifiers, enabling efficient batch processing of blood inventory status changes<br>- This component supports seamless inventory management and ensures accurate tracking of blood stock availability across the platform.</td>
																						</tr>
																					</table>
																				</blockquote>
																			</details>
																		</blockquote>
																	</details>
																	<!-- repositories Submodule -->
																	<details>
																		<summary><b>repositories</b></summary>
																		<blockquote>
																			<div class='directory-path' style='padding: 8px 0; color: #666;'>
																				<code><b>⦿ Back-End.hienmauapi-main.src.main.java.org.fpt.blooddonate.repositories</b></code>
																			<table style='width: 100%; border-collapse: collapse;'>
																			<thead>
																				<tr style='background-color: #f8f9fa;'>
																					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
																					<th style='text-align: left; padding: 8px;'>Summary</th>
																				</tr>
																			</thead>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/repositories/BloodReceiveRequestRepository.java'>BloodReceiveRequestRepository.java</a></b></td>
																					<td style='padding: 8px;'>- Defines data access operations for managing blood receive requests within the applications architecture, enabling efficient querying, filtering, and pagination based on status, keywords, and user associations<br>- Facilitates seamless retrieval of relevant blood donation requests, supporting the backends core functionality for handling blood donation workflows and ensuring data consistency across the system.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/repositories/BlogCategoryRepository.java'>BlogCategoryRepository.java</a></b></td>
																					<td style='padding: 8px;'>- Provides data access capabilities for managing blog category entities within the applications database<br>- It facilitates CRUD operations and queries related to blog categories, supporting the overall content management system of the blood donation platform<br>- This repository integrates with the Spring Data JPA framework to streamline database interactions and maintain data consistency across the backend architecture.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/repositories/SupportTicketRepository.java'>SupportTicketRepository.java</a></b></td>
																					<td style='padding: 8px;'>- Provides data access for support ticket management within the application, enabling retrieval and filtering of support tickets based on status and keywords<br>- Facilitates efficient querying and pagination, supporting user support workflows and ensuring seamless integration with the overall backend architecture for handling customer inquiries and support requests.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/repositories/BloodDonationActivityRespository.java'>BloodDonationActivityRespository.java</a></b></td>
																					<td style='padding: 8px;'>- Provides data access capabilities for blood donation activities, enabling retrieval of activity records with filtering by status and keyword search<br>- Integrates with the broader backend architecture to support efficient management and querying of blood donation events, facilitating seamless data operations within the blood donation management system.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/repositories/BloodUnitWareHouseRepository.java'>BloodUnitWareHouseRepository.java</a></b></td>
																					<td style='padding: 8px;'>- Provides data access methods for managing blood unit inventory within the warehouse, enabling retrieval of available blood units, filtering by status or location, and supporting paginated searches<br>- Facilitates efficient tracking and allocation of blood supplies, ensuring timely availability for medical needs while maintaining inventory integrity.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/repositories/BlogRepository.java'>BlogRepository.java</a></b></td>
																					<td style='padding: 8px;'>- Defines data access operations for retrieving blog entries within the application’s architecture<br>- Facilitates efficient querying and pagination of blogs based on category, status, and keywords, supporting dynamic content filtering<br>- Integrates with the overall backend to enable flexible, scalable retrieval of blog data, enhancing user experience through tailored content presentation.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/repositories/SupportTicketHistoryRepository.java'>SupportTicketHistoryRepository.java</a></b></td>
																					<td style='padding: 8px;'>- Provides data access capabilities for retrieving historical records of support tickets within the application<br>- Facilitates querying support ticket history entries based on specific ticket identifiers, supporting the overall support management system by enabling efficient tracking and auditing of ticket interactions and updates<br>- Integrates seamlessly into the backend architecture to ensure reliable data retrieval for support workflows.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/repositories/NotificationRepository.java'>NotificationRepository.java</a></b></td>
																					<td style='padding: 8px;'>- Provides data access methods for managing notifications within the application, enabling retrieval of paginated notifications based on status, keywords, and active date ranges<br>- Facilitates efficient querying of notification data to support features like filtering, searching, and displaying current active alerts, thereby integrating notification management into the overall system architecture.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/repositories/CompatibleBloodRepository.java'>CompatibleBloodRepository.java</a></b></td>
																					<td style='padding: 8px;'>- Defines data access methods for retrieving compatible blood type relationships within the blood donation system<br>- Facilitates querying blood compatibility data based on donor or recipient blood group identifiers, supporting the applications core functionality of matching blood donors with recipients<br>- Integrates with the overall architecture to ensure efficient and accurate retrieval of blood compatibility information.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/repositories/BloodDonationRequestRepository.java'>BloodDonationRequestRepository.java</a></b></td>
																					<td style='padding: 8px;'>- Provides data access methods for managing blood donation requests, enabling retrieval, filtering, and pagination based on status, keywords, and user associations<br>- Facilitates efficient querying within the backend architecture, supporting features like request tracking, user-specific views, and search functionality to streamline blood donation management workflows.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/repositories/EmployeeInformationRepository.java'>EmployeeInformationRepository.java</a></b></td>
																					<td style='padding: 8px;'>- Provides data access capabilities for employee information within the backend architecture, enabling retrieval and management of employee records<br>- It facilitates seamless integration with the database, supporting operations such as searching employees by their unique identifiers, thereby ensuring efficient handling of employee data in the overall blood donation management system.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/repositories/BloodRepository.java'>BloodRepository.java</a></b></td>
																					<td style='padding: 8px;'>- Provides data access methods for Blood entities within the applications architecture, enabling efficient retrieval and verification of blood type records<br>- It supports core functionalities such as checking for the existence of specific blood types and filtering blood entries based on their status, thereby facilitating seamless integration between the applications business logic and the underlying database.</td>
																				</tr>
																				<tr style='border-bottom: 1px solid #eee;'>
																					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Back-End/hienmauapi-main/src/main/java/org/fpt/blooddonate/repositories/UserRepository.java'>UserRepository.java</a></b></td>
																					<td style='padding: 8px;'>- Defines data access operations for user entities within the blood donation platform, enabling retrieval, verification, and filtering of user information based on roles, email, username, and blood group compatibility<br>- Facilitates efficient querying and management of user data, supporting features like user authentication, role-based filtering, and locating nearby users with compatible blood types, integral to the applications core functionality.</td>
																				</tr>
																			</table>
																		</blockquote>
																	</details>
																</blockquote>
															</details>
														</blockquote>
													</details>
												</blockquote>
											</details>
										</blockquote>
									</details>
								</blockquote>
							</details>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<!-- Front-End Submodule -->
	<details>
		<summary><b>Front-End</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ Front-End</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/vite.config.js'>vite.config.js</a></b></td>
					<td style='padding: 8px;'>- Configure the development environment for the front-end application by setting up Vite with React support<br>- It streamlines the build process, enabling rapid development and hot module replacement, which enhances developer productivity<br>- This configuration integrates seamlessly into the overall architecture, ensuring a smooth and efficient workflow for building and deploying the React-based user interface.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/package.json'>package.json</a></b></td>
					<td style='padding: 8px;'>- Defines the front-end applications configuration, dependencies, and scripts for development, building, and previewing the admin interface<br>- Facilitates a React-based, feature-rich dashboard leveraging libraries like Ant Design, Leaflet, and TinyMCE to enable efficient management and visualization within the overall system architecture<br>- Ensures streamlined development workflows and consistent project setup.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/eslint.config.js'>eslint.config.js</a></b></td>
					<td style='padding: 8px;'>- Defines ESLint configuration for the front-end project, ensuring code quality and consistency across JavaScript and JSX files<br>- It enforces best practices, integrates React-specific linting rules, and manages environment globals, supporting a maintainable and error-free codebase within the overall architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/index.html'>index.html</a></b></td>
					<td style='padding: 8px;'>- Establishes the foundational HTML structure for the Blood Donation web application, setting up the document metadata, favicon, and viewport configuration<br>- It loads the main JavaScript module responsible for rendering the user interface, serving as the entry point that integrates the front-end components into the overall architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/README.md'>README.md</a></b></td>
					<td style='padding: 8px;'>- Provides a streamlined React setup integrated with Vite, enabling rapid development with Hot Module Replacement and essential ESLint rules<br>- It facilitates quick project initialization, ensuring a smooth development experience while supporting future enhancements like TypeScript integration for robust, production-ready applications within the overall architecture.</td>
				</tr>
			</table>
			<!-- src Submodule -->
			<details>
				<summary><b>src</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ Front-End.src</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/App.jsx'>App.jsx</a></b></td>
							<td style='padding: 8px;'>- Provides the main user interface for the Blood Donation application, serving as the entry point for user interactions<br>- It displays branding, a dynamic counter, and guidance for further development, establishing the foundational front-end structure within the overall architecture<br>- This component facilitates initial user engagement and integrates core visual elements of the project.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/main.jsx'>main.jsx</a></b></td>
							<td style='padding: 8px;'>- Sets up the core rendering process for the front-end application by initializing React with strict mode, applying global UI configurations, and integrating the routing system<br>- It ensures the application is properly mounted onto the DOM, enabling seamless navigation and consistent styling across the user interface within the overall architecture.</td>
						</tr>
					</table>
					<!-- components Submodule -->
					<details>
						<summary><b>components</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ Front-End.src.components</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/components/NotificationBellUser.jsx'>NotificationBellUser.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides an interactive notification component that displays the latest alerts to users via a dropdown menu<br>- It fetches, presents, and allows detailed viewing of notifications, enhancing user engagement and awareness within the applications overall architecture<br>- The component seamlessly integrates with backend services to ensure real-time updates and detailed insights.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/components/ProtectedRoute.jsx'>ProtectedRoute.jsx</a></b></td>
									<td style='padding: 8px;'>- Implements route protection by verifying user authentication and authorization based on roles stored in local storage<br>- Ensures that only authenticated users with appropriate roles can access specific components, redirecting unauthorized or unauthenticated users to login or home pages<br>- This component enforces access control within the applications routing architecture, maintaining secure and role-based navigation.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/components/MySlateEditor.jsx'>MySlateEditor.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides a rich text editing component integrated into the front-end architecture, enabling users to input, modify, and persist formatted content seamlessly<br>- It manages local state synchronization with external data sources, ensuring consistent content rendering and updates within the applications user interface<br>- This component enhances user interaction by offering a flexible, styled editing experience aligned with the overall system design.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/components/ReadOnlySlate.jsx'>ReadOnlySlate.jsx</a></b></td>
									<td style='padding: 8px;'>- Render a read-only rich text component that displays structured content in a user-friendly format<br>- It parses JSON data to visualize formatted text within the applications interface, ensuring content is presented clearly without editing capabilities<br>- This component integrates seamlessly into the overall architecture, providing a consistent and accessible way to showcase static rich text content across the platform.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/components/SupportModalButton.jsx'>SupportModalButton.jsx</a></b></td>
									<td style='padding: 8px;'>- Facilitates user support interactions by providing a floating support button that opens a modal form<br>- Enables users to submit support requests with contact details and issue descriptions, integrating seamlessly into the applications architecture to enhance customer service and issue resolution workflows.</td>
								</tr>
							</table>
							<!-- User Submodule -->
							<details>
								<summary><b>User</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ Front-End.src.components.User</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/components/User/UserDetail.jsx'>UserDetail.jsx</a></b></td>
											<td style='padding: 8px;'>- Provides a comprehensive user detail view within the application, displaying personal information, blood donation history, and blood receipt requests<br>- Facilitates data retrieval, visualization, and refresh capabilities through organized tabs and tables, supporting user management and monitoring functionalities in the overall system architecture.</td>
										</tr>
									</table>
								</blockquote>
							</details>
							<!-- Campaign Submodule -->
							<details>
								<summary><b>Campaign</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ Front-End.src.components.Campaign</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/components/Campaign/CampaignDetail.jsx'>CampaignDetail.jsx</a></b></td>
											<td style='padding: 8px;'>- Provides a detailed view and management interface for campaign information within the application<br>- Facilitates viewing, editing, and updating campaign details, including status and participant data, while integrating with backend services<br>- Serves as a central component for campaign administration, ensuring data consistency and user interaction for campaign lifecycle management.</td>
										</tr>
									</table>
								</blockquote>
							</details>
							<!-- Blood Submodule -->
							<details>
								<summary><b>Blood</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ Front-End.src.components.Blood</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/components/Blood/BloodDetail.jsx'>BloodDetail.jsx</a></b></td>
											<td style='padding: 8px;'>- Provides a comprehensive interface for managing blood group details, including viewing, editing, and updating status<br>- Facilitates the configuration of compatible blood donation and reception groups, ensuring accurate blood compatibility data<br>- Integrates with backend services to maintain data consistency and supports user interactions for administrative tasks within the blood management system.</td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/components/Blood/BloodForm.jsx'>BloodForm.jsx</a></b></td>
											<td style='padding: 8px;'>- Provides a reusable form component for managing blood-related tasks within the front-end architecture<br>- Facilitates user input for task details, status, admin, and progress, supporting creation and update workflows<br>- Integrates seamlessly with the overall application to enable efficient data entry and editing, ensuring consistency and user-friendly interaction across the blood management features.</td>
										</tr>
									</table>
								</blockquote>
							</details>
							<!-- VietnamMap Submodule -->
							<details>
								<summary><b>VietnamMap</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ Front-End.src.components.VietnamMap</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/components/VietnamMap/index.jsx'>index.jsx</a></b></td>
											<td style='padding: 8px;'>- Provides an interactive map component centered on Vietnam that enables users to search for specific addresses<br>- It dynamically updates the maps focus based on search results obtained via an external geocoding API, facilitating location discovery and visualization within the applications geographic context.</td>
										</tr>
									</table>
								</blockquote>
							</details>
							<!-- ReceiveBloodAdmin Submodule -->
							<details>
								<summary><b>ReceiveBloodAdmin</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ Front-End.src.components.ReceiveBloodAdmin</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/components/ReceiveBloodAdmin/ReceiveBloodAdminDetail.jsx'>ReceiveBloodAdminDetail.jsx</a></b></td>
											<td style='padding: 8px;'>- The <code>ReceiveBloodAdminDetail.jsx</code> component serves as a comprehensive interface for managing detailed information related to blood receipt requests within the applications administrative module<br>- It enables administrators to view, update, and track the status of specific blood receipt requests, including details about blood units, their current statuses, and associated logistics<br>- By integrating with backend services, this component facilitates real-time data retrieval and status updates, ensuring efficient oversight and management of blood inventory processes in the broader blood bank management system.</td>
										</tr>
									</table>
								</blockquote>
							</details>
							<!-- Register Submodule -->
							<details>
								<summary><b>Register</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ Front-End.src.components.Register</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/components/Register/RegisterForm.jsx'>RegisterForm.jsx</a></b></td>
											<td style='padding: 8px;'>- This <code>RegisterForm.jsx</code> component serves as the primary user interface for new user registration within the application<br>- It facilitates user account creation by collecting essential information, including personal details and location data via an interactive map<br>- The form integrates with backend services to register users and retrieve blood type options, supporting the broader systems goal of onboarding users efficiently<br>- Positioned within the front-end architecture, this component ensures a seamless registration experience, capturing geospatial data to enhance location-aware functionalities across the platform.</td>
										</tr>
									</table>
								</blockquote>
							</details>
							<!-- Blog Submodule -->
							<details>
								<summary><b>Blog</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ Front-End.src.components.Blog</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/components/Blog/BlogTab.jsx'>BlogTab.jsx</a></b></td>
											<td style='padding: 8px;'>- Manages the blog administration interface by displaying a list of blog posts, enabling creation, viewing, and deletion of entries<br>- Integrates rich text editing for content, handles image uploads, and categorizes posts, facilitating efficient content management within the overall application architecture.</td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/components/Blog/BlogDetail.jsx'>BlogDetail.jsx</a></b></td>
											<td style='padding: 8px;'>- Provides a detailed view and editing interface for individual blog posts within the application<br>- Facilitates data retrieval, display, and updates of blog content, categories, and metadata, enabling seamless content management<br>- Integrates rich text editing and category selection, supporting both read-only and edit modes to enhance user experience and content accuracy.</td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/components/Blog/BlogCategoryDetail.jsx'>BlogCategoryDetail.jsx</a></b></td>
											<td style='padding: 8px;'>- Provides a detailed interface for viewing and editing blog category details within the application<br>- Facilitates data retrieval, display, and updates, enabling users to manage category information seamlessly<br>- Integrates navigation, status indicators, and form controls to support efficient content management in the overall blog architecture.</td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/components/Blog/BlogCategoryTab.jsx'>BlogCategoryTab.jsx</a></b></td>
											<td style='padding: 8px;'>- Manages blog category data within the admin interface by displaying existing categories, enabling creation of new ones, and providing navigation to category details<br>- Facilitates efficient organization and management of blog content, ensuring seamless updates and user interactions in the overall content management architecture.</td>
										</tr>
									</table>
								</blockquote>
							</details>
							<!-- Login Submodule -->
							<details>
								<summary><b>Login</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ Front-End.src.components.Login</b></code>
									<!-- AppHeader Submodule -->
									<details>
										<summary><b>AppHeader</b></summary>
										<blockquote>
											<div class='directory-path' style='padding: 8px 0; color: #666;'>
												<code><b>⦿ Front-End.src.components.Login.AppHeader</b></code>
											<table style='width: 100%; border-collapse: collapse;'>
											<thead>
												<tr style='background-color: #f8f9fa;'>
													<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
													<th style='text-align: left; padding: 8px;'>Summary</th>
												</tr>
											</thead>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/components/Login/AppHeader/AppHeader.jsx'>AppHeader.jsx</a></b></td>
													<td style='padding: 8px;'>- Defines the header component for the Blood Bank Management Systems front-end interface, providing consistent branding and navigation across pages<br>- It displays the system title and a navigation element, primarily facilitating user orientation and access to the home page within the applications overall architecture.</td>
												</tr>
											</table>
										</blockquote>
									</details>
									<!-- Card Submodule -->
									<details>
										<summary><b>Card</b></summary>
										<blockquote>
											<div class='directory-path' style='padding: 8px 0; color: #666;'>
												<code><b>⦿ Front-End.src.components.Login.Card</b></code>
											<table style='width: 100%; border-collapse: collapse;'>
											<thead>
												<tr style='background-color: #f8f9fa;'>
													<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
													<th style='text-align: left; padding: 8px;'>Summary</th>
												</tr>
											</thead>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/components/Login/Card/LoginCard.jsx'>LoginCard.jsx</a></b></td>
													<td style='padding: 8px;'>- Implements the user login interface, facilitating authentication by capturing credentials and handling login requests<br>- Manages user session storage, provides role-based navigation, and offers a user-friendly login form integrated with validation and visual styling<br>- Serves as a core component for user access control within the applications front-end architecture.</td>
												</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
							<!-- BloodDonationRequest Submodule -->
							<details>
								<summary><b>BloodDonationRequest</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ Front-End.src.components.BloodDonationRequest</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/components/BloodDonationRequest/BloodDonationRequestDetail.jsx'>BloodDonationRequestDetail.jsx</a></b></td>
											<td style='padding: 8px;'>- This code file, <code>BloodDonationRequestDetail.jsx</code>, serves as the detailed view component within the front-end architecture for managing blood donation requests<br>- It provides users with comprehensive information about a specific blood donation request, including its status and relevant details<br>- Additionally, it facilitates administrative actions such as approving, rejecting, or marking the request as completed, thereby supporting the workflow and lifecycle management of blood donation requests within the application<br>- This component plays a crucial role in ensuring transparent and efficient handling of donation requests, aligning with the overall systems goal of streamlining blood donation processes.</td>
										</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<!-- layout Submodule -->
					<details>
						<summary><b>layout</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ Front-End.src.layout</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/layout/MainLayoutUser.jsx'>MainLayoutUser.jsx</a></b></td>
									<td style='padding: 8px;'>- Defines the main user interface layout for the application, including navigation menus, header, footer, and content area<br>- Facilitates seamless user navigation across different sections such as activity, request history, blood requests, and settings<br>- Integrates user notifications and profile management, ensuring a consistent and accessible experience within the overall architecture of the front-end system.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/layout/MainLayout.jsx'>MainLayout.jsx</a></b></td>
									<td style='padding: 8px;'>- Defines the main layout structure for the blood donation management system, providing role-based navigation menus for administrators and employees<br>- Facilitates consistent user interface across pages, displaying user information, navigation links, and system branding, while managing routing and session handling to ensure seamless access control within the applications architecture.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- router Submodule -->
					<details>
						<summary><b>router</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ Front-End.src.router</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/router/index.jsx'>index.jsx</a></b></td>
									<td style='padding: 8px;'>- Defines the applications client-side routing structure, managing navigation across different user roles including admin, user, and employee<br>- Implements role-based access control, redirects, and layout composition to ensure users access appropriate sections, facilitating seamless navigation and security within the overall architecture<br>- This routing configuration is central to orchestrating user flow and component rendering across the platform.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- api Submodule -->
					<details>
						<summary><b>api</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ Front-End.src.api</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/api/axiosConfig.js'>axiosConfig.js</a></b></td>
									<td style='padding: 8px;'>- Establishes a centralized Axios instance to manage API requests within the front-end architecture<br>- Handles automatic inclusion of authentication tokens, manages response errors, and enforces user re-authentication upon authorization failures<br>- Facilitates secure and consistent communication with backend services, ensuring seamless user experience and robust error handling across the application.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- variables Submodule -->
					<details>
						<summary><b>variables</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ Front-End.src.variables</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/variables/baseUrl.js'>baseUrl.js</a></b></td>
									<td style='padding: 8px;'>- Defines the base URL for image assets used throughout the front-end application, ensuring consistent referencing of image resources<br>- It dynamically adapts to environment variables for flexible deployment configurations, supporting seamless integration between local development and production environments within the overall project architecture.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- services Submodule -->
					<details>
						<summary><b>services</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ Front-End.src.services</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/services/supportService.js'>supportService.js</a></b></td>
									<td style='padding: 8px;'>- Facilitates interaction with support ticket data by providing functions to retrieve, view details, and update ticket statuses<br>- Integrates seamlessly with the API layer to enable efficient support management within the application<br>- Serves as a core service for handling support-related operations, supporting the overall architectures goal of streamlined customer support workflows.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/services/userService.js'>userService.js</a></b></td>
									<td style='padding: 8px;'>- Provides core user management functionalities within the front-end architecture, enabling retrieval, updating, and deletion of user data, as well as handling user-specific actions like password changes and profile updates<br>- Facilitates interaction with backend APIs to support administrative and user-centric features, ensuring seamless data flow and user operations across the application.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/services/bloodReceiveRequestService.js'>bloodReceiveRequestService.js</a></b></td>
									<td style='padding: 8px;'>- Provides an abstraction layer for managing blood receive requests within the application<br>- Facilitates retrieval, creation, updating, and cancellation of blood receive requests through API interactions, supporting seamless integration with backend services<br>- This service centralizes request handling, ensuring consistent data operations and contributing to the overall architectures modularity and maintainability.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/services/receiveBloodAdminService.js'>receiveBloodAdminService.js</a></b></td>
									<td style='padding: 8px;'>- Facilitates management of blood receive requests within the administrative system by providing functions to retrieve request lists, details, and update statuses<br>- Also supports access to blood unit warehouses, including available and used units, ensuring efficient tracking and processing of blood donation and transfusion workflows across the platform.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/services/bloodWarehouseService.js'>bloodWarehouseService.js</a></b></td>
									<td style='padding: 8px;'>- Provides core services for managing blood unit inventory within the application, enabling retrieval of pending blood units, marking units as tested, and canceling tests<br>- These functions facilitate seamless interaction with the backend API, supporting administrative workflows related to blood sample processing and status updates in the blood warehouse management system.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/services/notificationService.js'>notificationService.js</a></b></td>
									<td style='padding: 8px;'>- Provides core functionalities for managing notifications within the application, including retrieving, creating, updating, and deleting notification data through API interactions<br>- Facilitates seamless communication between the front-end and back-end services, ensuring efficient handling of notification-related operations to support user engagement and system alerts.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/services/blogCategoryService.js'>blogCategoryService.js</a></b></td>
									<td style='padding: 8px;'>- Provides core functionalities for managing blog categories within the front-end application, enabling retrieval, creation, detail fetching, and updating of categories through API interactions<br>- Integrates seamlessly into the overall architecture by facilitating dynamic content organization and ensuring consistent communication with the backend service for blog category data management.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/services/blogService.js'>blogService.js</a></b></td>
									<td style='padding: 8px;'>- Provides core functionalities for managing blog content within the application, enabling retrieval, creation, updating, and deletion of blog posts<br>- Facilitates seamless communication between the front-end and back-end API, supporting dynamic content management and ensuring data consistency across the platforms blogging features.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/services/campaignService.js'>campaignService.js</a></b></td>
									<td style='padding: 8px;'>- Provides an abstraction layer for interacting with the blood donation campaigns API, enabling retrieval, creation, and updating of campaign data<br>- Facilitates seamless integration between the front-end application and backend services, supporting features like listing campaigns, viewing details, and managing upcoming or ongoing campaigns within the overall project architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/services/unitBloodService.js'>unitBloodService.js</a></b></td>
									<td style='padding: 8px;'>- Provides core services for managing blood unit warehouses, enabling retrieval, cancellation, and testing confirmation of blood storage facilities<br>- Facilitates seamless communication with backend APIs to support administrative operations related to blood inventory management within the larger healthcare or blood bank system architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/services/bloodService.js'>bloodService.js</a></b></td>
									<td style='padding: 8px;'>- Provides an API interface for managing blood data and blood donation requests within the application<br>- Facilitates CRUD operations for blood types, handles donation request workflows, and manages blood compatibility mappings, supporting efficient blood bank operations and ensuring accurate processing of donation activities.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/services/authService.js'>authService.js</a></b></td>
									<td style='padding: 8px;'>- Provides core authentication and support ticket functionalities by interfacing with backend API endpoints<br>- Facilitates user login, registration, and support ticket creation, enabling seamless user account management and customer support integration within the front-end architecture<br>- Serves as a centralized service layer to streamline API interactions related to user authentication and support workflows.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/services/donorService.js'>donorService.js</a></b></td>
									<td style='padding: 8px;'>- Facilitates communication between the front-end application and backend donor management APIs, enabling seamless retrieval, creation, updating, and deletion of donor data<br>- Integrates donor-related functionalities into the overall architecture, supporting efficient data handling and ensuring consistent interactions within the donor management module of the project.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/services/dashboardService.js'>dashboardService.js</a></b></td>
									<td style='padding: 8px;'>- Facilitates retrieval of dashboard analysis data by making an API call to the backend service<br>- Integrates seamlessly within the front-end architecture to provide real-time insights and analytics, supporting data-driven decision-making across the application<br>- Serves as a key service layer component that abstracts API interactions, ensuring consistent and efficient data access for dashboard-related features.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/services/donationService.js'>donationService.js</a></b></td>
									<td style='padding: 8px;'>- Provides core functionalities for managing blood donation requests within the application<br>- Facilitates creating, retrieving, updating, and canceling donation requests through API interactions, supporting seamless communication between the front-end and back-end services<br>- Serves as a centralized service layer to handle blood donation operations, ensuring efficient and organized request management in the overall architecture.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- pages Submodule -->
					<details>
						<summary><b>pages</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ Front-End.src.pages</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/NotificationManager.jsx'>NotificationManager.jsx</a></b></td>
									<td style='padding: 8px;'>- NotificationManager.jsxThis component serves as the central interface for managing notifications within the application<br>- It provides functionalities to view, search, create, update, and delete notifications, facilitating effective communication management across the platform<br>- By integrating with backend services, it ensures real-time synchronization of notification data, supporting a seamless user experience<br>- Overall, it plays a crucial role in the applications architecture by enabling administrators to efficiently oversee notification content and status, thereby maintaining consistent and timely user engagement.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/Donors.jsx'>Donors.jsx</a></b></td>
									<td style='padding: 8px;'>- Facilitates management of blood donors by displaying a dynamic table and enabling addition of new donors through a modal form<br>- Integrates user-friendly interfaces for data entry and updates, supporting the broader systems goal of maintaining an organized, accessible donor database within the healthcare or blood donation platform.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/BloodReceiveRequestManager.jsx'>BloodReceiveRequestManager.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides a user interface for managing blood receive requests, enabling filtering by status, viewing detailed request information, and navigating through paginated data<br>- Integrates with backend services to fetch and display real-time request statuses, supporting efficient oversight and processing within the blood management system.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/CampaignManager.jsx'>CampaignManager.jsx</a></b></td>
									<td style='padding: 8px;'>- Manages the display and administration of blood donation campaigns, including listing, filtering by status, and creating new campaigns through a user-friendly interface<br>- Facilitates navigation to campaign details, handles data fetching, and ensures seamless user interactions for campaign management within the broader system architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/UserManager.jsx'>UserManager.jsx</a></b></td>
									<td style='padding: 8px;'>- Manages user data within the application by displaying, filtering, and performing CRUD operations on user profiles<br>- Facilitates administrative tasks such as viewing detailed user information, deleting users, and adding new employees through a comprehensive interface<br>- Integrates with backend services to ensure real-time data synchronization and user management efficiency.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/SupportManager.jsx'>SupportManager.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides a comprehensive interface for managing support tickets within the application<br>- Enables viewing, searching, filtering, and updating ticket statuses, along with detailed insights into each request and its history<br>- Facilitates efficient support operations by integrating ticket details, status management, and user interactions into a centralized dashboard.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/Register.jsx'>Register.jsx</a></b></td>
									<td style='padding: 8px;'>- Facilitates user registration by rendering a visually engaging registration page with a centered form overlay<br>- Integrates the RegisterForm component within a styled full-screen background, ensuring an accessible and user-friendly onboarding experience aligned with the applications overall architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/Login.jsx'>Login.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides the main login interface for the application, presenting users with a visually engaging and centered login card<br>- Integrates header components and background styling to create an inviting entry point, supporting user authentication workflows within the overall front-end architecture<br>- Ensures a consistent, accessible, and aesthetically pleasing login experience aligned with the projects design standards.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/BloodWarehouse.jsx'>BloodWarehouse.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides an interface for managing blood units pending testing within the blood warehouse system<br>- Enables users to view, search, and paginate through blood unit records, and perform actions such as marking units as tested or canceling them<br>- Integrates with backend services to update statuses, supporting efficient blood inventory oversight in the overall healthcare architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/Campaigns.jsx'>Campaigns.jsx</a></b></td>
									<td style='padding: 8px;'>- Defines the Campaigns page within the front-end application, serving as a placeholder for future features related to blood donation campaigns<br>- It integrates a styled card component to maintain consistent UI layout and prepares the structure for upcoming campaign management functionalities, contributing to the overall user interface and experience of the blood donation platform.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/Dashboard.jsx'>Dashboard.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides a comprehensive dashboard overview by fetching and displaying key metrics related to blood donation, requests, inventory, personnel, and content<br>- Utilizes visual cards and charts to present real-time data insights, supporting effective monitoring and decision-making within the applications architecture<br>- Facilitates quick access to vital statistics and trends for stakeholders.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/BloodManager.jsx'>BloodManager.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides a comprehensive interface for managing blood groups within the application<br>- Facilitates viewing, adding, and deleting blood types, ensuring data consistency and user interaction through modals, forms, and action buttons<br>- Integrates with backend services to fetch and update blood group data, supporting efficient administration and real-time updates in the overall system architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/BloodDonationRequestManager.jsx'>BloodDonationRequestManager.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides a comprehensive interface for managing blood donation requests, enabling users to view, filter by status, and navigate to detailed request pages<br>- It integrates data fetching, pagination, and status filtering to streamline request oversight within the broader blood donation management system<br>- This component ensures efficient handling and monitoring of donation requests for staff or administrators.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/BlogManager.jsx'>BlogManager.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides a user interface for managing blog content by organizing blog categories and individual blog posts within a tabbed layout<br>- Integrates with the overall front-end architecture to facilitate content administration, enabling users to efficiently navigate and update blog-related data through a cohesive, accessible component.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/BloodUnitManager.jsx'>BloodUnitManager.jsx</a></b></td>
									<td style='padding: 8px;'>- Manages the display and interaction of blood unit inventory within the application, enabling users to view, filter, and update blood unit statuses<br>- Facilitates actions such as canceling units and recording test results, ensuring accurate tracking of blood units through various stages in the blood bank workflow<br>- Integrates with backend services for real-time data updates.</td>
								</tr>
							</table>
							<!-- ForUser Submodule -->
							<details>
								<summary><b>ForUser</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ Front-End.src.pages.ForUser</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/ForUser/CampaignDetail.jsx'>CampaignDetail.jsx</a></b></td>
											<td style='padding: 8px;'>- The <code>CampaignDetail.jsx</code> file serves as the primary interface for displaying detailed information about a specific blood donation campaign within the application<br>- It fetches and presents comprehensive campaign data, including status, schedule, and participant details, enabling users to view campaign specifics at a glance<br>- Additionally, it facilitates user interactions such as donating blood, allowing eligible users to participate directly from the campaign detail page<br>- This component integrates seamlessly into the overall architecture by connecting to backend services for data retrieval and donation actions, thereby supporting the applications goal of managing and promoting blood donation campaigns effectively.</td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/ForUser/ProfileDetail.jsx'>ProfileDetail.jsx</a></b></td>
											<td style='padding: 8px;'>- Displays detailed personal information of the logged-in user, serving as the main interface for viewing profile data within the application<br>- Facilitates user interactions such as editing profile details and changing passwords, integrating seamlessly into the user account management architecture<br>- Enhances user experience by presenting data in a clear, organized, and visually appealing format.</td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/ForUser/ListRequest.jsx'>ListRequest.jsx</a></b></td>
											<td style='padding: 8px;'>- Provides a user interface for managing blood donation requests, enabling users to view, filter by status, update, and cancel requests<br>- Integrates with backend services to fetch data, handle request modifications, and maintain real-time updates, supporting efficient donation request tracking within the overall system architecture.</td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/ForUser/NearMe.jsx'>NearMe.jsx</a></b></td>
											<td style='padding: 8px;'>- Displays a dynamic list of nearby users, fetching real-time data to facilitate social or community interactions<br>- It presents user profiles with essential details such as name, contact info, gender, blood type, and distance, enhancing user engagement by providing relevant local connections within the application’s architecture.</td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/ForUser/BlogPage.jsx'>BlogPage.jsx</a></b></td>
											<td style='padding: 8px;'>- Displays a paginated, searchable list of user-generated blog posts, enabling users to browse, preview, and navigate to detailed views<br>- Integrates with backend services to fetch content dynamically, presenting a user-friendly interface for knowledge sharing within the broader application architecture.</td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/ForUser/ProfileEdit.jsx'>ProfileEdit.jsx</a></b></td>
											<td style='padding: 8px;'>- Facilitates user profile editing by providing a comprehensive form for updating personal information, including contact details, health data, and blood type<br>- Integrates with backend services to fetch blood group options and submit profile changes, ensuring data consistency and a seamless user experience within the overall application architecture.</td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/ForUser/Dashboard.jsx'>Dashboard.jsx</a></b></td>
											<td style='padding: 8px;'>- Provides a user dashboard showcasing upcoming blood donation campaigns, educational resources, and community engagement prompts<br>- It fetches and displays campaign data with pagination, offering quick access to detailed information and encouraging participation in blood donation activities within the broader health and community support architecture.</td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/ForUser/BlogDetailUser.jsx'>BlogDetailUser.jsx</a></b></td>
											<td style='padding: 8px;'>- Displays detailed information of a specific blog post, including its content, category, publication date, and cover image<br>- Facilitates user navigation back to the previous page and dynamically fetches blog data based on URL parameters<br>- Integrates seamlessly into the overall architecture by providing an engaging, user-friendly interface for viewing individual blog entries within the front-end application.</td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/ForUser/ChangePassword.jsx'>ChangePassword.jsx</a></b></td>
											<td style='padding: 8px;'>- Facilitates user password updates within the application by providing a secure, user-friendly interface for changing passwords<br>- Integrates with backend services to validate and process password modifications, ensuring seamless account security management<br>- Supports the overall architecture by enabling authenticated users to maintain control over their credentials through a dedicated front-end component.</td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/AnhKhoaa157/Blood-Donation-System/blob/master/Front-End/src/pages/ForUser/ReceiveBlood.jsx'>ReceiveBlood.jsx</a></b></td>
											<td style='padding: 8px;'>- ReceiveBlood.jsxThis component serves as the main interface for managing blood receipt requests within the application<br>- It enables users to create, view, update, and delete blood receipt requests, facilitating efficient handling of blood inventory and request workflows<br>- Integrated with backend services, it supports features such as search, pagination, and status filtering, ensuring a comprehensive and user-friendly experience for managing blood receipt operations within the broader blood management system.</td>
										</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---

## Getting Started

### Prerequisites

This project requires the following dependencies:

- **Programming Language:** Java
- **Package Manager:** Maven, Npm, Yarn

### Installation

Build Blood-Donation-System from the source and install dependencies:

1. **Clone the repository:**

    ```sh
    ❯ git clone https://github.com/AnhKhoaa157/Blood-Donation-System
    ```

2. **Navigate to the project directory:**

    ```sh
    ❯ cd Blood-Donation-System
    ```

3. **Install the dependencies:**

**Using [maven](https://maven.apache.org/):**

```sh
❯ mvn install
```
**Using [npm](https://www.npmjs.com/):**

```sh
❯ npm install
```
**Using [yarn](https://yarnpkg.com/):**

```sh
❯ yarn install
```

### Usage

Run the project with:

**Using [maven](https://maven.apache.org/):**

```sh
mvn exec:java
```
**Using [npm](https://www.npmjs.com/):**

```sh
npm start
```
**Using [yarn](https://yarnpkg.com/):**

```sh
yarn start
```

### Testing

Blood-Donation-System uses the {__test_framework__} test framework. Run the test suite with:

**Using [maven](https://maven.apache.org/):**

```sh
mvn test
```
**Using [npm](https://www.npmjs.com/):**

```sh
npm test
```
**Using [yarn](https://yarnpkg.com/):**

```sh
yarn test
```

---

## Roadmap

- [X] **`Task 1`**: <strike>Implement feature one.</strike>
- [ ] **`Task 2`**: Implement feature two.
- [ ] **`Task 3`**: Implement feature three.

---

## Contributing

- **💬 [Join the Discussions](https://github.com/AnhKhoaa157/Blood-Donation-System/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/AnhKhoaa157/Blood-Donation-System/issues)**: Submit bugs found or log feature requests for the `Blood-Donation-System` project.
- **💡 [Submit Pull Requests](https://github.com/AnhKhoaa157/Blood-Donation-System/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/AnhKhoaa157/Blood-Donation-System
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/AnhKhoaa157/Blood-Donation-System/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=AnhKhoaa157/Blood-Donation-System">
   </a>
</p>
</details>

---

## License

Blood-Donation-System is protected under the [LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

<div align="left"><a href="#top">⬆ Return</a></div>

---
