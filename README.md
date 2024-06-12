<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digimart Ecommerce</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>Digimart Ecommerce</h1>
            <a href="http://your-website-link.com" target="_blank" class="visit-now">Visit Now</a>
        </header>
        
        <section class="tech-stack">
            <h2>Tech Stack</h2>
            <div class="tech-images">
                <img src="path/to/nodejs-logo.png" alt="Node.js">
                <img src="path/to/expressjs-logo.png" alt="Express.js">
                <img src="path/to/redux-logo.png" alt="Redux">
                <img src="path/to/tailwind-logo.png" alt="Tailwind CSS">
                <img src="path/to/reactjs-logo.png" alt="React.js">
            </div>
        </section>
        
        <section class="payment-gateway">
            <h2>Payment Gateway</h2>
            <img src="path/to/paytm-logo.png" alt="Paytm">
        </section>
        
        <section class="services">
            <h2>Services</h2>
            <p><strong>Cloud Storage:</strong> Cloudinary</p>
            <p><strong>Mail Service:</strong> SMTP</p>
        </section>

        <section class="features">
            <h2>🚀 Features</h2>
            <ul>
                <li><strong>User Account Management</strong>
                    <ul>
                        <li>Login/Signup: 🚪 Users can create an account or log in to an existing one.</li>
                        <li>Update Profile/Password: 🔐 Users can update their profile information and change their passwords.</li>
                    </ul>
                </li>
                <li><strong>Password Management</strong>
                    <ul>
                        <li>Reset Password Mail: 📧 Utilizing Sendgrid, users can reset their passwords via email.</li>
                    </ul>
                </li>
                <li><strong>Shopping Cart</strong>
                    <ul>
                        <li>Add/Remove Items: 🛒 Users can add items to their shopping cart or remove them as needed.</li>
                        <li>Update Quantities: 🔢 Quantities of items in the cart can be adjusted.</li>
                    </ul>
                </li>
                <li><strong>Saved Items</strong>
                    <ul>
                        <li>Save For Later: 💾 Users can move items from the cart to a "Saved For Later" list or remove them from it.</li>
                    </ul>
                </li>
                <li><strong>Wishlist</strong>
                    <ul>
                        <li>Add/Remove Items: ❤️ Users can add items to their wishlist or remove them from it.</li>
                    </ul>
                </li>
                <li><strong>Product Browsing</strong>
                    <ul>
                        <li>Pagination: 📚 Products are paginated, with 12 products displayed per page by default.</li>
                        <li>Search: 🔍 Users can search for products.</li>
                        <li>Filters: 🎛️ Products can be filtered based on categories, ratings, and price range.</li>
                    </ul>
                </li>
                <li><strong>Checkout Process</strong>
                    <ul>
                        <li>Shipping Info: 🚚 Shipping information is stored in session storage for ease of checkout.</li>
                        <li>Payment Options: 💳 Users can pay through Paytm payment gateway for checkout.</li>
                    </ul>
                </li>
                <li><strong>Order Management</strong>
                    <ul>
                        <li>My Orders: 📦 Users can view their order history with various filters.</li>
                        <li>Order Details: ℹ️ Details of all ordered items are accessible.</li>
                        <li>Order Confirmation: ✉️ Users receive email notifications with comprehensive order details upon placing an order.</li>
                    </ul>
                </li>
                <li><strong>Product Interaction</strong>
                    <ul>
                        <li>Review Products: 🌟 Users can review products.</li>
                    </ul>
                </li>
                <li><strong>Admin Features</strong>
                    <ul>
                        <li>Dashboard: 🖥️ Admins have access to a dedicated dashboard.</li>
                        <li>Order Management: 📊 Admins can update order statuses and delete orders.</li>
                        <li>Product Management: 📝 Admins can add/update products.</li>
                        <li>User Management: 👥 Admins can update user data and delete users.</li>
                        <li>Review Management: 📜 Admins can view and delete product reviews.</li>
                        <li>Stock Management: 📉 Product stock is automatically decreased upon shipment.</li>
                    </ul>
                </li>
            </ul>
        </section>
        
        <section class="contact">
            <h2>📬 Contact</h2>
            <p>Feel free to reach me through the below handles if you'd like to contact me.</p>
            <div class="social-links">
                <a href="https://www.linkedin.com/in/your-profile" target="_blank">
                    <img src="path/to/linkedin-logo.png" alt="LinkedIn">
                </a>
                <a href="https://www.instagram.com/your-profile" target="_blank">
                    <img src="path/to/instagram-logo.png" alt="Instagram">
                </a>
            </div>
        </section>
    </div>

    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
        }

        .container {
            width: 80%;
            margin: auto;
            overflow: hidden;
        }

        header {
            padding: 20px 0;
            border-bottom: 1px solid #e4e4e4;
            margin-bottom: 20px;
        }

        header h1 {
            margin: 0;
            font-size: 2.5em;
            text-align: center;
        }

        .visit-now {
            display: block;
            text-align: center;
            font-size: 1.2em;
            color: white;
            background: #0073e6;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            margin: 10px auto;
            width: 200px;
        }

        .tech-stack, .payment-gateway, .services, .features, .contact {
            margin-bottom: 20px;
        }

        .tech-images img, .social-links img {
            width: 100px;
            margin: 10px;
        }

        .tech-stack .tech-images, .contact .social-links {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }

        ul {
            list-style: none;
            padding: 0;
        }

        ul li {
            margin: 10px 0;
        }

        .features ul li ul {
            margin-left: 20px;
            list-style: circle;
        }

        .social-links a {
            margin: 0 10px;
        }

        .social-links img {
            width: 40px;
        }
    </style>
</body>
</html>
