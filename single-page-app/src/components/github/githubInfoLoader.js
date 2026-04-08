export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/devprajwolgotnochill-commits')
    return response.json()
}
