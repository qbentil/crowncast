if (process.env.NODE_ENV === "production") {
    const variables = [
        "NEXT_PUBLIC_API_BASE_URL",
    ];
    for (let variable of variables) {
        if (!process.env[variable]) {
            throw new Error(`Kindly Provide Variable ${variable} In Env`);
        }
    }
}

interface Config {
    env: ("production" | "staging" | "sandbox" | "test" | "development");
    constants: {
        page: number;
        pageSize: number;
        dateFormat: string;
    };
}

const config: Config = {
    env: (process.env.NODE_ENV as any) ?? "development",
    constants: {
        page: 1,
        pageSize: 10,
        dateFormat: "",
    }
};

export default config;