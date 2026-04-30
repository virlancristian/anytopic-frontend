async function sleep() {
    return new Promise((resolve) => setTimeout(resolve, 3000));
}

export default async function Home() {
    await sleep();
    return <h1>AnyTopic</h1>
}