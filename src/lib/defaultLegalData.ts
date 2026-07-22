export interface LegalDocument {
  id: string;
  appId: string;
  title: string;
  category: string;
  content: string;
  version: string;
  createdAt: string;
  updatedAt: string;
  updatedBy: string;
  isPublished: boolean;
  history: { version: string; date: string; author: string; changes: string }[];
}

export const defaultLegalData: LegalDocument[] = [
  // ROYALS KITCHEN
  {
    id: "privacy-policy",
    appId: "royals-kitchen",
    title: "Privacy Policy",
    category: "Privacy",
    version: "1.0.0",
    createdAt: "2026-07-20",
    updatedAt: "2026-07-20",
    updatedBy: "Legal Team",
    isPublished: true,
    history: [{ version: "1.0.0", date: "2026-07-20", author: "Legal Team", changes: "Initial creation" }],
    content: `
## Information We Collect

### Account Information
When you create a Royals Kitchen account, we collect your name, email address, phone number, and password.

### Kitchen Information
If you register as a food seller, we collect your kitchen name, address, menu items, and business licenses. We do not collect or store direct payment processing details as payments are handled off-platform.

### Food Posts, Images, and Videos
We store any content you upload, including food descriptions, images, and videos.

### Messages
We securely store communications between buyers and sellers to facilitate orders and resolve any communication disputes.

### Orders
We collect details of order requests placed through the platform, including items ordered, pricing, delivery address, and timestamps. We do not process or store financial transaction data.

### Cookies and Device Information
We use cookies to keep you logged in and understand how you interact with our platform. We collect your device type, IP address, and browser information for analytics and security.

### Data Storage & Security
All data is encrypted in transit and at rest using industry-standard protocols. We only retain your data for as long as necessary.

### User Rights & Data Deletion
You have the right to access, modify, or delete your personal data. You can delete your account directly from your settings.

### Children's Privacy
Royals Kitchen is not intended for users under the age of 13.

### International Users
Your data may be processed in countries outside of your residence. By using the app, you consent to this transfer.

### Policy Updates
We may update this policy periodically. We will notify you of any material changes.

### Contact Information
For privacy concerns, please contact privacy@yebnas.com.
    `
  },
  {
    id: "terms-and-conditions",
    appId: "royals-kitchen",
    title: "Terms & Conditions",
    category: "Terms",
    version: "1.0.0",
    createdAt: "2026-07-20",
    updatedAt: "2026-07-20",
    updatedBy: "Legal Team",
    isPublished: true,
    history: [{ version: "1.0.0", date: "2026-07-20", author: "Legal Team", changes: "Initial creation" }],
    content: `
## Acceptance of Terms
By accessing Royals Kitchen, you agree to these Terms & Conditions.

## User Accounts (Buyer & Seller)
You must provide accurate information when creating an account. You are responsible for maintaining the confidentiality of your password.

## Kitchen Creation & Food Listings
Sellers must only list items they intend to sell and fulfill. All food listings must be accurate, not misleading, and comply with local health regulations.

## Orders & Payments
Royals Kitchen does not process payments. All financial transactions—including cash on delivery, cash on pickup, mobile money, or direct bank transfers—are conducted strictly between the buyer and the food seller. Royals Kitchen and its administrators do not interfere with, process, or take responsibility for payments.

## Refunds
Since Royals Kitchen does not process payments, we cannot issue refunds. All refunds or payment disputes must be resolved directly between the buyer and the seller.

## Intellectual Property
You retain ownership of the content you upload, but grant Royals Kitchen a license to display it on our platform.

## Prohibited Activities
You may not use the platform for fraud, selling prohibited items, or harassing other users.

## Suspension & Account Termination
We reserve the right to suspend or terminate any account that violates these Terms.

## Limitation of Liability
Royals Kitchen is a marketplace connecting buyers and sellers. We do not prepare the food and are not liable for the quality or safety of the meals prepared by independent sellers.

## Changes to Terms
We may modify these terms at any time. Continued use of the platform constitutes acceptance of the modified terms.
    `
  },
  {
    id: "community-guidelines",
    appId: "royals-kitchen",
    title: "Community Guidelines",
    category: "Guidelines",
    version: "1.0.0",
    createdAt: "2026-07-20",
    updatedAt: "2026-07-20",
    updatedBy: "Legal Team",
    isPublished: true,
    history: [{ version: "1.0.0", date: "2026-07-20", author: "Legal Team", changes: "Initial creation" }],
    content: `
## Respect
Treat all buyers and sellers with respect. Royals Kitchen is a community built on trust and mutual appreciation for food.

## Honest Selling
Sellers must provide accurate descriptions, high-quality images of *their own* food, and set clear expectations for delivery or pickup times.

## Authentic Food Listings
Stock photos or stolen images are strictly prohibited. You must only post images of food you have prepared.

## No Fraud or Fake Kitchens
Creating fake accounts, posting fake reviews, or setting up ghost kitchens to deceive buyers is prohibited.

## No Harassment or Hate Speech
We have a zero-tolerance policy for harassment, discrimination, or hate speech.

## No Spam
Do not send unsolicited promotional messages to users.

## Reporting Abuse
If you encounter a violation of these guidelines, please report it immediately using the in-app reporting tools.

## Enforcement Actions
Violations may result in warnings, temporary suspensions, or permanent bans from the platform.
    `
  },
  {
    id: "seller-policy",
    appId: "royals-kitchen",
    title: "Seller Policy",
    category: "Policy",
    version: "1.0.0",
    createdAt: "2026-07-20",
    updatedAt: "2026-07-20",
    updatedBy: "Legal Team",
    isPublished: true,
    history: [{ version: "1.0.0", date: "2026-07-20", author: "Legal Team", changes: "Initial creation" }],
    content: `
## Seller Independence & Responsibilities
As a seller on Royals Kitchen, you are running your own independent culinary business. You are responsible for fulfilling orders, communicating effectively with buyers, and collecting your own payments. Royals Kitchen administrators do not interfere in your financial transactions or dictate your preferred payment methods.

## Kitchen Standards & Food Safety Expectations
Sellers must adhere to all local food safety and hygiene regulations. Kitchens must be kept clean, and ingredients must be stored properly.

## Pricing Accuracy
Prices must be clear and inclusive of any required taxes. Hidden fees are prohibited. You must clearly state your accepted payment methods (e.g., cash, mobile money) on your profile.

## Customer Service
Sellers are expected to address buyer concerns professionally and promptly.

## Delivery Expectations
If offering delivery, ensure the food is packaged securely to maintain temperature and prevent spills.

## Prohibited Products
You may not sell alcohol, regulated substances, or any illegal items through Royals Kitchen.

## Account Violations
Failure to meet these standards may result in temporary suspension or removal from the platform.
    `
  },
  {
    id: "buyer-policy",
    appId: "royals-kitchen",
    title: "Buyer Policy",
    category: "Policy",
    version: "1.0.0",
    createdAt: "2026-07-20",
    updatedAt: "2026-07-20",
    updatedBy: "Legal Team",
    isPublished: true,
    history: [{ version: "1.0.0", date: "2026-07-20", author: "Legal Team", changes: "Initial creation" }],
    content: `
## Buyer Responsibilities
When you place an order, you agree to pay the food seller directly via their accepted payment methods (e.g., cash on delivery, mobile money, or direct bank transfer) and be available to receive the order at the specified time and location.

## Safe Ordering
Review the seller's ratings and food descriptions carefully before ordering. If you have severe allergies, communicate them clearly to the seller, but understand that cross-contamination risks may exist.

## Payment Responsibilities
You are responsible for sending payments directly to the seller by your own choice and judgment. Royals Kitchen does not process your payments. Only send money in advance if you completely trust the seller.

## Reviews
Reviews must be honest, based on your actual experience, and free of inappropriate language.

## Order Cancellation
Orders can be cancelled before the seller accepts them. Since payments are direct, any refunds for cancelled orders must be requested directly from the seller.

## Reporting Problems
If there is an issue with your order or a seller's conduct, report it through the app within 24 hours so we can review the seller's standing on the platform.
    `
  },
  {
    id: "refund-policy",
    appId: "royals-kitchen",
    title: "Refund Policy",
    category: "Policy",
    version: "1.0.0",
    createdAt: "2026-07-20",
    updatedAt: "2026-07-20",
    updatedBy: "Legal Team",
    isPublished: true,
    history: [{ version: "1.0.0", date: "2026-07-20", author: "Legal Team", changes: "Initial creation" }],
    content: `
## Platform Independence
Royals Kitchen acts exclusively as a marketplace connecting buyers and food sellers. We do not process payments for food orders, and therefore, we cannot issue or mandate refunds for food purchases.

## Direct Transactions
All food payments are made directly between the buyer and the seller (e.g., via cash, mobile money, or bank transfer). If you require a refund because:
- The order never arrived,
- The wrong items were delivered, or
- The food was severely damaged,
You must contact the food seller directly to negotiate a refund or replacement.

## Subscription Refunds (If Applicable)
If you are a subscribed seller paying a platform fee directly to Yebnas Studio, those subscriptions are billed on a recurring basis. You may cancel at any time. We do not provide prorated refunds for partial months.

## Payment Disputes
Since we do not handle transaction funds for food orders, Royals Kitchen management cannot mediate financial disputes, initiate chargebacks, or reimburse lost funds. We encourage buyers to pay upon delivery or pickup unless they completely trust the seller.
    `
  },
  {
    id: "content-policy",
    appId: "royals-kitchen",
    title: "Content Policy",
    category: "Policy",
    version: "1.0.0",
    createdAt: "2026-07-20",
    updatedAt: "2026-07-20",
    updatedBy: "Legal Team",
    isPublished: true,
    history: [{ version: "1.0.0", date: "2026-07-20", author: "Legal Team", changes: "Initial creation" }],
    content: `
## Allowed Content
You may post high-quality images and videos of food you have prepared, detailed descriptions of ingredients, and behind-the-scenes looks at your kitchen.

## Prohibited Content
- **Illegal Content**: Any content promoting illegal acts.
- **Violence**: Graphic or violent imagery.
- **Adult Content**: Sexually explicit material.
- **Spam**: Repetitive, irrelevant, or promotional spam.

Violating these rules will result in immediate content removal and potential account termination.
    `
  },
  {
    id: "copyright-policy",
    appId: "royals-kitchen",
    title: "Copyright Policy",
    category: "Legal",
    version: "1.0.0",
    createdAt: "2026-07-20",
    updatedAt: "2026-07-20",
    updatedBy: "Legal Team",
    isPublished: true,
    history: [{ version: "1.0.0", date: "2026-07-20", author: "Legal Team", changes: "Initial creation" }],
    content: `
## Copyright Ownership
Royals Kitchen and Yebnas Studio own the platform, branding, and original source code. 

## User Generated Content
Sellers own the rights to the photos and videos they upload. By uploading them, you grant us a license to display them.

## Copyright Complaints
We respect the intellectual property rights of others. If you believe your work has been copied in a way that constitutes copyright infringement, please provide our Copyright Agent with a written notice.

## Removal Procedures
Upon receiving a valid DMCA takedown notice, we will promptly remove or disable access to the allegedly infringing content.
    `
  },
  {
    id: "cookie-policy",
    appId: "royals-kitchen",
    title: "Cookie Policy",
    category: "Privacy",
    version: "1.0.0",
    createdAt: "2026-07-20",
    updatedAt: "2026-07-20",
    updatedBy: "Legal Team",
    isPublished: true,
    history: [{ version: "1.0.0", date: "2026-07-20", author: "Legal Team", changes: "Initial creation" }],
    content: `
## What Cookies Are
Cookies are small text files stored on your device when you visit our website or use our app.

## Types of Cookies
- **Essential Cookies**: Necessary for the platform to function (e.g., keeping you logged in).
- **Performance Cookies**: Help us understand how users interact with the app.
- **Functional Cookies**: Remember your preferences.

## Cookie Usage
We use cookies to improve your experience, ensure security, and analyze performance.

## Managing Cookies
You can control or delete cookies through your browser settings. However, disabling essential cookies may prevent the platform from functioning correctly.
    `
  },
  {
    id: "safety-center",
    appId: "royals-kitchen",
    title: "Safety Center",
    category: "Safety",
    version: "1.0.0",
    createdAt: "2026-07-20",
    updatedAt: "2026-07-20",
    updatedBy: "Legal Team",
    isPublished: true,
    history: [{ version: "1.0.0", date: "2026-07-20", author: "Legal Team", changes: "Initial creation" }],
    content: `
## Safe Buying
Since Royals Kitchen does not process payments centrally, you will pay the seller directly (e.g., Cash on Delivery, Mobile Money, or Bank Transfer). To protect yourself, we strongly recommend paying only upon delivery or pickup. If you choose to send money in advance, ensure you completely trust the seller. Royals Kitchen is not liable for lost funds in direct transactions.

## Safe Selling
As an independent seller, you are responsible for collecting your own payments. Clearly communicate your accepted payment methods to buyers before confirming an order.

## Scam Prevention
Be cautious of individuals asking for unusual payment methods or overpayments. Royals Kitchen will never ask for your password or financial information via email or text message.

## Reporting Abuse
If a buyer or seller is acting fraudulently or failing to honor their agreements, use the report button to alert our administration team.

## Account Security & Password Tips
Use a strong, unique password for your account. We recommend enabling Two-Factor Authentication (2FA) if available.
    `
  },

  // GOLDEN KITCHEN (Placeholder Examples to show it supports multiple)
  {
    id: "privacy-policy",
    appId: "golden-kitchen",
    title: "Privacy Policy",
    category: "Privacy",
    version: "0.1.0",
    createdAt: "2026-07-20",
    updatedAt: "2026-07-20",
    updatedBy: "Legal Team",
    isPublished: true,
    history: [{ version: "0.1.0", date: "2026-07-20", author: "Legal Team", changes: "Initial draft" }],
    content: `This is the upcoming privacy policy for Golden Kitchen. Currently under review.`
  },
  {
    id: "terms-and-conditions",
    appId: "golden-kitchen",
    title: "Terms & Conditions",
    category: "Terms",
    version: "0.1.0",
    createdAt: "2026-07-20",
    updatedAt: "2026-07-20",
    updatedBy: "Legal Team",
    isPublished: true,
    history: [{ version: "0.1.0", date: "2026-07-20", author: "Legal Team", changes: "Initial draft" }],
    content: `These are the upcoming terms for Golden Kitchen. Currently under review.`
  },

  // YEBNAS STUDIO GENERAL
  {
    id: "privacy-policy",
    appId: "general",
    title: "Yebnas Studio Privacy Policy",
    category: "Privacy",
    version: "2.1.0",
    createdAt: "2025-01-01",
    updatedAt: "2026-06-20",
    updatedBy: "Legal Team",
    isPublished: true,
    history: [{ version: "2.1.0", date: "2026-06-20", author: "Legal Team", changes: "Updated data sharing clauses" }],
    content: `General Yebnas Studio Privacy Policy. Applicable to the corporate website and general accounts.`
  },
  {
    id: "terms-and-conditions",
    appId: "general",
    title: "Yebnas Studio Terms of Service",
    category: "Terms",
    version: "2.0.0",
    createdAt: "2025-01-01",
    updatedAt: "2026-01-15",
    updatedBy: "Legal Team",
    isPublished: true,
    history: [{ version: "2.0.0", date: "2026-01-15", author: "Legal Team", changes: "Annual review" }],
    content: `General Yebnas Studio Terms of Service.`
  }
];
