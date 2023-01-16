const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'febb8e4b-f5f0-4ccb-b048-ef3435de3b81'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
