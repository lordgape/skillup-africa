process.stdin.on("data", data => {
    process.stdout.write(`\n\n ${data.toString().trim()} \n\n`)
})

// Todo. Create a Q/A using both stdin and stdout