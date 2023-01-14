# Notes
Git is a free and open source version control system designed to handle everything form small to very large projects with speed and efficiency.

> _What is version management/control?_
> * Multiple files 
> * Single file
> * Version management: Don’t losee any prior version. Doesn’t consume a lot of space on the machine. 

Git is about _control and tracking of code changes_ (or another stuff) over time. It’s a highly efficient version control tool.

**Git:** 
* Version control system (is free and a local tool).
* Manage code history very efficiency.
* Track changes.

**GitHub:**
* The largest and most advance development platform in the world.
* Cloud hosting & collaboration provider.
* Git repository hosting.



## Text base computer interaction 

Graphical User Interface (GUI)
- User friendly
- Easy to explore

Command prompt
- Windows computer
- Free commands
- Accessing to the C drive. 

	Pros: 
	Time saving
	More possibilities (Start servers, download + install tools, run code, execute files, working with git) 

### Mac Terminology

Terminal -> Text input environment
Shell -> Text input interface
	Bash
	zsh (Z-Shell)

#### Terminal Commands: 
**Pwd** -> Location (‘/users/melidiaz’) - Print Working Directory
**Ls** -> List Items (‘Folders on melidiaz’)
**Cd** -> Change directory (if it is use alone, go to the home directory)
**Cd ..** -> ‘Sube’ de carpeta en el directorio
**Cd /**-> Root directory 
Cd /Users -> Users directory
Cd + ‘tab twice’ -> Show carpets with similar names
~ -> Indicates that we are currently in the directory ‘melidiaz’
Mkdir -> Make directory (create new folder)
Touch -> Make files (touch existing files and simply change the date when the file was change de last time but if can’t finde a specific file, create a new one)
Rm -> Delete a file permanently
Rmdir -> Delete the directory (only if it is empty)
Rm -r -> Remove folder that contains data.
-s -> a Flag (add additional information to our command) to see the file size
-l -> Long format to get additional information about the data. 
Man + ‘command’ -> Manual to get access to the manual of that command
Cp -> Copy
Cp -r -> Copies the entire data (r for recursive)
Mv -> Move (We can’t move the entire data, but we can move folders). With move, also we can rename a file. e.g. ‘mv style.css style.css’

**_Relative and absolute paths_** 

> **Relative path:** Starting from the current location to another folder.
> **Absolute path:** All the folder structure. No matter where we are at the moment, we could jump to a specific folder.

### How it works

Git under the hood -> .git (hidden folder) also call Git Repository.

We have Working Directory and repository.

Repository contains 2 areas:
	- Staging Area (index file): It’s like a draft area.
	- Commits

Important to know that **Git means tracking changes**, not storing files, again and again.

Compare de new commit with the previous commit and only track the changes. 

### Branches & Commits

Working directory/Tree: All the commits inside the working directory are stored inside the _master branch_ (commit 1, commit 2, commit 3...) 

**Branches** 
--> alow us to create an entire copy of the current state of the master branch. We have the project folder, but this is not de _master branch_. Here we can work independently from that master branch, and implementing the changes we want to do. 

--> Once we are done with implementing change, we can add the changes back to the master branch. This is called **so-called merge**.

--> Branches are, basically sub folders inside the Git project.

### Installing Git and firts steps

1. [Homebrew](https://brew.sh/index_es)
2. Install Git: On terminal...

		brew install Git

3. Check if the installation was succesfull

		git --version

4. For Visual Studio Code: [Visual studio code introduction](https://academind.com/tutorials/visual-studio-code-introduction)

5. Create a folder and open it on the IDE.

6. On terminal of VSC:

		git status // Check working directory & staging area status
		git init // for initialize if it's the firts time (create empty git repository)

> Command + Shift + Punto. --> To watch hide folders

Then... 

	git add <file>...
	// or...
	git add . //whit the dot notation this will simply track all our files in the project folder.

>=> Whenever we add a file to the staging area throughout the project, and then also commit these changes, then these files will remain in the staging area.

For commit...

	git commit -m "message" // Message is something we want to put accordingly our changes.

7. If we need to configure Git we need to write: 

		git config --global user.email "you@example.com"
		git config --global user.name "Your Name"
		// if we omit global, we just simply add our credentials to an individual git project.


8. If we need to know the ID for each commit we create: 

		git log 
		// display all commits of current branch 

The result is something like this: 

	melidiaz@Melissas-MacBook-Air git-basics % git log
	commit 4f1a3e7202717fa29fb2f041882a11210c2c6177 (HEAD -> master)
	Author: melodiaz23 <meli.diaz23@gmail.com>
	Date:   Fri Jan 6 12:21:51 2023 -0500

9. If we want to ckech out a especial commit...

e.g:

	commit aa018e6458d75b2eff13763ab91f54612308997d (HEAD -> master)
	Author: melodiaz23 <meli.diaz23@gmail.com>
	Date:   Fri Jan 6 13:01:50 2023 -0500

    added second commit file

	commit 4f1a3e7202717fa29fb2f041882a11210c2c6177
	Author: melodiaz23 <meli.diaz23@gmail.com>
	Date:   Fri Jan 6 12:21:51 2023 -0500

    first committ git basics

we write: 

	git checkout 4f1a3e7202717fa29fb2f041882a11210c2c6177
	// We can check an especial commit
	// or...
	git checkout master // to get back to the master branch.

___

Branch --> set of specific code changes.

- We have a project in there:
  * Our working directory.
  * All the commits and the commits are in a current master branch. 

> The master branch is the default name for the first branch we create in Git projects. 

To know **all the branches we have** in a current project and where we are:

	git branch

to create a new branch: 

	git branch branch-name
	// or...
	git switch branch-name

to acces to one branch, we use **checkout**: 

	git checkout branch-name 

... or another way to create a new branch:

	git checkout -b nameofthebranch 
	// this creates a new branch and checks it out inmediately.

If we create a new file, this is only create in that new branch. If we want to add that file to the master branch, we can do it with a feature called merging. For that we use: 

	git merge nameofthebranchwewanttomerge

> we need to switch to our master before merge.

### What is head?

Is the last commit and becautse we checkout the branch, is that specific branch wich idirectly points to the last commit in this branch.

> If we check a specific branch this branch holds differente commits and the latest commkit of a specific branch is then the so-called head.

#### Detached HEAD

It is when a commit it's not related to a specific branch. -> A commit is in detached head state.

Explanation: [Using Git: What is a "Detached HEAD"?](https://www.youtube.com/watch?v=GN36mrrM12k)

### Branches and "git switch"

	git switch 

We used switch to create and check out a new branch -> It's related to working with branches.

And, to create a new branch: 

	git swicth -c [nameofthenewbranch]

### Deleting data

To check wich files are currently part of our staging area: 

	git ls-files
	//List data in staging area

If we delate a file (already part of previous commit), we can use: 

	git rm <file name we're going to remove> 
	// run after file was delected fron working directory
	// to also remove it from staging area
	// or...
	git add [file name we're going to add] or .
	// dot to add all working directory files to staging area

Once is deleted, we can commit the change.

To go back to the status of the latest commit (to undo a change, not stage for the commmit - unstaged changes):

	git checkout [name of the file we want to refer to the head/latest commit]
	//Or if we have some files and we want to go back to the head status of all commits on the currrent branch
	git checkout . //go back to all 

Another option, with a new command from Git is: 

	git restore [name of the file or dot .]

> Adding two dashes [--] tell Git that we don't refer to any specific branch, e.g:
	git checkout -- 
	// revert changes in tracket files 

If we have and untracked file we want to get rid of:

	git clean -dn  // D for delete and We add n to list all the entries we'll to delete
	// this help us to see what we're going to delete before...and then:
	git clean -df // F stand for force. Force git to really do it without asking.

##### Deleting Stage changes

Once we add the files to the stage area... if we want to undo that changes, we need to bring back the latest commit, tha latest stage of the file, and copy into the staging area: 

	git reset [name of the file] 
	// remove flie(s) from staging area
	// Copy the latest committed change of a file into the staging area
	//then we must to use checkout.
	git checkout [name of the file]

Another option is with restore command. It help us to restore and earlier stage of the project.
In the case we want to restore the version prior:

	git restore --staged [name of the file] 
	// Restore is more explicit than reset.
	// Also remove file(s) from staging area
	// and then
	git checkout [name of the file]

#### Latest commits

> Git reset helps us to reset the head of our branch (undo commits).

For example, to go back to the prior version of our last commit:

	git reset --soft HEAD~1
	//head because is the one that should be reset
	// and ~1 according of the steps you want to go back.

With this, the commit is remove, the file is still in the working directory and in the staging area.

Another way is: 

	git reset HEAD~1 //The default way

That way, the file it will remove from the commit and the staging area. It will still remain on the working directory.

The hard way to reset the commits are: 

	git reset --hard HEAD~1

It will remove the commits, the files on the staging area and the file from the working directory.

#### Branches

	git branch
	// To check the branches we have.

To delete branches we use -d or -D. Small d will only allow us to delete branches if we merge the branches already. Capital D, will force the deletion.

	git branch -D <File to delete>
	// or...
	git branch -d <file to delete>

We can also delete multiple branches with one command, with one space between the name of the files.

	git branch -D <file> <file>

## Git stash

Stash is like a internal memory, where we can save uncommitted unstaged changes.

	git stash // To get back in our **latest** commit

	git stash apply 
	// To get back to our unstage change.

	git stash list // To get an overview of all our stash changes.
	// stash@{0} is allways the latest.

	git stash apply 1
	// The number depends on what data stash we want to access.

If we access to some of this unstage data, we need to do something: stash it again, add the changes and commit these. 

If we want, stash the changes, again: 

	git stash // In this case, with git stash, to come back
	// now we will have a new file added to the working directory. 

To add messages to our stashes: 

	git stash push m- "Message we want to let"
	// m- for message.

To add one of the files to the project:

	git stash pop 0
	//The number depends on the index nunber we want to add to our project.
	// This just means that we want to add this staged commit to our project
	// and remove it from the stash. 

We could also use git stash apply. With that, the data would still remain in the stash. With stash pop, the data is deleted from the stash and apply to the project. 

To delete individual entries:

	git stash drop 0
	// Number according to the index number.  

To clear the enter stash

	git stash clear

## Git Restore