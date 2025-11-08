import RPC from "discord-rpc";

const CLIENT_ID = "1390865740512366723";

function getTimestamp(): number {
    return Math.floor(Date.now() / 1000);
}

// Your original activity structure - untouched
function createActivity(startTimestamp: number) {
    return {
        application_id: CLIENT_ID,
        details: "DevBuild 404f3ae",
        largeImageKey: "https://vencord.dev/assets/logo.png",
        largeImageText: "Velocity",
        buttons: [
            {
                "label": "View sorce code",
                "url": "https://github.com/Velocitcy/Velocity"
            }
        ],
        startTimestamp
    };
}

const client: any = new RPC.Client({ transport: "ipc" });

client.on("ready", () => {
    const startTimestamp = getTimestamp();
    const activity = createActivity(startTimestamp);

    client.setActivity(activity);
    console.log("CustomRPC Started, Check your Discord profile!");
});

client.login({ clientId: CLIENT_ID });
