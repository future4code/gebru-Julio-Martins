type User = {
    name: string,
    email: string,
    role: "admin" | "user"
}[];

const users: User = [
    { name: "Rogério", email: "roger@email.com", role: "user" },
    { name: "Ademir", email: "ademir@email.com", role: "admin" },
    { name: "Aline", email: "aline@email.com", role: "user" },
    { name: "Jéssica", email: "jessica@email.com", role: "user" },
    { name: "Adilson", email: "adilson@email.com", role: "user" },
    { name: "Carina", email: "carina@email.com", role: "admin" }
];

const adminEmails = (user: User): string[] => {
    return user.filter(user => {
        return user.role === "admin"
    }).map(user => {
        return user.email
    })
};

console.log(adminEmails(users));