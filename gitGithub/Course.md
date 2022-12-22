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

Working directory/Tree: All the commits inside the working directory are stored inside the _master branch_ (Commit 1, commit 2, commit 3...) 

Branches alow us to create an entire copy of the current state of the master branch. 