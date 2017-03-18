# Jungle Gym 

## Preface

It's 2017. You're a **dev OR engineer OR genius billionaire playboy philanthropist** that does **web OR devops OR databases OR app dev OR bots OR gaming OR infrastructure OR machine learning OR \<INSERT AND ITERATE OVER MANY THINGS HERE\>**.

Which means it's 2017 and in the eyes of _**Planet Earth**_ you're a **dev AND engineer AND ~~genius billionaire~~ playboy ~~philanthropist~~** that does **web AND devops AND databases AND app dev AND bots AND gaming AND infrastructure AND machine learning AND \<INSERT AND ITERATE OVER MANY THINGS HERE\>**.

***

> Arise, _**Almighty Wizard of Amalur**_, you are a _**Beacon of Radiance among Humanity**_. 

***

Wait, _what's that?_ 

You're trying to tell me the human mind can not possibly retain the incredulous amount of information required to code in a multitude of languages that themselves employ thousands of different libraries and frameworks gifted from the almighty wizards before us?

![Mind Blown](https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif)

Dats weird, I feel like right now the [University|Work|Societal] overlords expects me to be punching on with at least 10 languages at the top of my game...

**¯\\\_(ツ)\_/¯**

"But milady, how does one comfortably **\<INSERT AND ITERATE OVER MANY THINGS HERE\>**?"

**¯\\\_(ツ)\_/¯**
**¯\\\_(ツ)\_/¯**
**¯\\\_(ツ)\_/¯**

> Hereth.
> 
> Cometh.
> 
> Forthetheth.
> 
> Jungle Gym~~eth~~.
> 
> Eth.

***

## What is Jungle Gym?

**Definition** 

> jungle gym (noun, NORTH AMERICAN)

_A playground for children_

**(ty Google)**

***

_*Jungle Gym*_ is my little playground of playgrounds that uses `Gulp` to watch over a whole bunch of different types of files and execute commands as soon as a file changes.

The idea is to be able to have my terminal running a watch command and then irrespective of what language and or folder I am practising, it will execture and log out the results to the console.

Watch me do just that.

![Jungle Gym file switching](https://media.giphy.com/media/xUPGcDT9FmflV0SWpq/giphy.gif)

### How does it work?

A combination of things come together to make this work.

As of version `0.1.0` (rn fam), I've just put together a bunch of basics `gulp watch` tasks that will execute a child process on a change that will run through certain commands. 

![Always watching](https://media.giphy.com/media/W8GPIDjqsj2MM/giphy.gif)

I put this first iteration together in less time than I have spent writing this `README.md` file, so currently that means that some child processes will execute commands directly from the `gulp` task, but alternatively I have shoved together some bash exec scripts that will just deal with the flexibility of running some stuff.

I'll probably move everything across to script files in coming days/weeks as this is updated. Check the section on the road map, y'all.

## Getting Started

Download/clone the project, change into the root of the folder and run `npm install` (or better yet, `yarn install`) the deps. 

If you want the extra dependencies for other JS folders like `rxjs` and `js-testing`, check **Install Scripts** below.

Once installed, simply run `gulp watch` to start watching all the directories.

**Dōmo arigatō, Mr. Roboto** 

But wait, there are issues and things aren't working? Refer to the FAQs section pls.

## Coverage 

Something I must inform you is that each of these languages will generally have certain requirements to run. If you are not running on a computer that uses some of the languages, just delete the folder and tasks if you would like. This lib is begging to be hacked for your personal use.

First release is just a bunch of languages and libs that I use regularly.

**Environments**

- C (using clang, can be changed in `c/exec`)
- Objective-C (using clang)
- Swift 
- C++
- PHP
- Python3 
- Ruby
- Babel 
- Typescript 
- Go 
- Java 
- js-testing (consists of Casperjs, Mocha/Chai environments and Enzyme (for React))
- RxJS

If your language of choice is not here, check the roadmap or make a request.

## Install scripts 

Some additional scripts can be run to `yarn install` packages for certain folders eg. `js-testing` and `rxjs`.

Ensure that you run them from the base. I'll add `npm commands` to make this easier. They will be based on the folder name - examples being `yarn run js-testing` and `yarn run rxjs`.

Check `package.json` to see where this is relevant.

## FAQS 

**Q: Why are there dependencies that I don't need right now in `package.json`?**

A: This is version 0.1.0 and the motivation behind the project was for my own personal use and as a gift to work friends to focus on learning how to write JS for testing, ES6+, etc for our work projects. I plan to remove what's not necessary and shift those dependencies to an `install` file for each folder that will require those install.

***

**Q: Some of the tasks crash and do not work**

A: Early days m8, let me know what to fix or - I recommend - just hack this to suit your actual needs. If the file requires the script to run, ensure that you have given the correct permissions if it is not set (eg. `chmod u+x file`) and that you have the correct requirements installed for each language.

C and Objective-C (from memory) I just wrote to compile with `clang` as well. May switch over to `gcc` but I'll make that decision later.

***

**Q: Required deps are not installed**

A: Some folders come with an install script to save the reduce the initial installation size. Check the `Install scripts` section above or package.json to see what you can run.

***

**Q: Can you add ... ?**

A: Request and I'll add it to the road map if it seems relevant. Pull reqs also welcome but I might hold off on that until I properly sort out the structure.

***

**Q: How about adding web frameworks like React, Angular etc?**

A: Currently there are jungle gyms on my personal, private repo that include these - but those are fully fledged web dev envs and I just want this to focus on the smaller things. I recommend looking at other great projects for a basic setup that does hot reloading etc.

I may add this in if I feel like it - don't want to go overkill.

## Roadmap

Pretty light right now - will get back to it later.

- [ ] Update Folder structure 
	- [ ] Update execution of testing folders
	- [ ] Update scripts
	- [ ] Write makefiles
	- [ ] Write install scripts 
	- [ ] Write install everything script 
- [ ] Jungle Gyms 
	- [ ] Python2 
	- [ ] R 

