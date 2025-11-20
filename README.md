Q. Provide an example of using union and intersection types in TypeScript.

**Union (ইউনিয়ন)**

Union টাইপ মানে “Either / Or” — অর্থাৎ একাধিক ধরনের মধ্যে যেকোনো একটি।
Union টাইপের মাধ্যমে একটি ভেরিয়েবল বিভিন্ন ধরনের মান রাখতে পারে। এখানে | সিমবলটি ব্যবহার করা হয়।

এটি বাস্তব জীবনের এমন সব অবস্থাকে মডেল করে যেখানে ফলাফল একাধিক সম্ভাবনার মধ্যে যেকোনো একটি হতে পারে।
এক লাইনে: Union মানে—একটি ভেরিয়েবল বিভিন্ন রূপ নিতে পারে।

উদাহরণ:
type InputValue = string | number;

**Intersection (ইন্টারসেকশন)**

Intersection টাইপ মানে “Combine / Merge” — অর্থাৎ সবকিছু একসাথে থাকতে হবে।
Intersection টাইপ একাধিক টাইপকে একত্রিত করে একটি নতুন টাইপ তৈরি করে। এতে যে অবজেক্ট তৈরি হবে সেটিকে সবগুলো টাইপের শর্ত পূরণ করতে হবে। এখানে & সিমবল ব্যবহার করা হয়।

এক লাইনে: Intersection মানে—সব টাইপের প্রপার্টি মিলিয়ে একটি পূর্ণাঙ্গ টাইপ।

উদাহরণ:
type AdminUser = User & Admin;

Q.What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

**\*ENUMS**
TypeScript-এ Enums ব্যবহার করা হয় একটি নির্দিষ্ট নামযুক্ত constants এর সেট তৈরির জন্য।
এগুলো কোডকে আরও পাঠযোগ্য (readable), সহজে রক্ষণাবেক্ষণযোগ্য (maintainable) করে এবং “magic numbers” বা কাঁচা স্ট্রিং ব্যবহারজনিত ভুল কমায়।

Enums বিশেষভাবে উপকারী যখন আপনার কোডে কোনো স্থির মানের তালিকা ব্যবহার করতে হয়—যেমন:

ইউজার রোল

API স্ট্যাটাস কোড

দিকনির্দেশ (North, South ইত্যাদি)

Order বা workflow এর বিভিন্ন স্টেট

উদাহরণ:(Numeric Enum )

enum OrderStatus {
Pending,  
 Shipped,  
 Delivered,
Cancelled
}
let status: OrderStatus = OrderStatus.Shipped;
console.log(status);

উদাহরণ:(String Enum)

enum UserRoles {
Admin = "Admin",
Editor = "Editor",
Viewer = "Viewer",
}

const canEdit = (role: UserRoles) => {
if (role === UserRoles.Admin || role === UserRoles.Editor) {
return true;
} else return false;
};

const isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);
