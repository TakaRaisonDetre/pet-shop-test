module.exports={
    port:process.env.PORT,
    file:["./**/*.{html,htm,css.js}"],
    service:{
        baseDir:["./src", "./build/contracts"]
    }
}