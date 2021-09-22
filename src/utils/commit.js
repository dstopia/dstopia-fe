import { exec } from 'child_process'

import chalk from 'chalk'

let args = process.argv
args.splice(0, 2)

let str = args.join(' ')

function runCommit() {
    if (!str || str === '' || str === ' ') {
        console.log(chalk.red('Please input some message!'))
        return
    }
    console.log(chalk.magenta.italic('Adding untracked files...'))
    exec('git add .', cbAdd)

    function cbAdd(err) {
        if (err) {
            console.log(err)
            return
        }
        console.log(chalk.magenta.italic('Commiting files...\n'))
        exec(`git commit -m "${str}"`, cbCommit)
    }

    function cbCommit(err, strout) {
        if (err) {
            console.log(err)
            return
        }
        console.log(chalk.green(strout))
        console.log(
            chalk.blue(`Commit done with message : ${chalk.yellow(`"${str}"`)}`)
        )
    }
}

runCommit()
// npm run commit -- message
