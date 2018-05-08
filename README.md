# Open-Source

Repo created for those who would like to practice contributing to open source.

# Lets do this!

## Fork this repo

<img align="right" width="300" src="form.jpg" alt="fork this repository" />

Fork this repo by clicking on the fork button on the top of this page.
A copy of this repository will be created in your account.

## Create a local clone of your fork

<img align="right" width="300" src="clone.png" alt="clone this repository" />

Now clone this repo to your machine. Go to your GitHub account, click on the clone button and then click the *copy to clipboard* icon.

Open a terminal, change into the directory you'd prefer to put the project and run the following git command:

```
git clone <url you just copied>
```
where `<url you just copied>` (without the <>) is the url to this repository (the fork, or copy you created). See the previous steps to obtain the url.

<img align="right" width="300" src="clone-url.png" alt="copy URL to clipboard" />

Example:
```
git clone https://github.com/YOUR_USERNAME/open-source.git
```
where `YOUR_USERNAME` is your GitHub username. Here you're copying the contents of the open-source repository in GitHub to your computer.

## Create a branch

Change to the repository directory on your computer:

```
cd open-source
```
Now create a branch with your name using the `git checkout` command:
```
git checkout -b <your-name>
```

For example:
```
git checkout -b alex-flores-veliz
```

## Make necessary changes and commit those changes

Pick an issue that you'd like to work on. Issues can be found under `Issues` can be found to the right of `Code` and to the left of `Pull Request` right below the repo name and repo author and will be properly labeled with difficulty levels. Issues will be added regularly. 

<img style="float: right;" src="issues.png" alt="submit pull request" />

After you have completed one of the issues and are content with the work, it's time to get credit for it!

Open `CONTRIBUTORS.md` and add the following line at the end of `CONTRIBUTORS.md`:

```
- [YOUR_NAME](https://github.com/YOUR_USERNAME)
```

For example:

```
- [Alex Flores-Veliz](https://github.com/AlexFloresVeliz)
```

Make sure there is no space between `](` . Save the file and then close it.

If you go to the project directory and execute the command `git status`, you'll see there are changes. Add the changes to CONTRIBUTORS.md and any other file you worked on (i.e. .html, .css, or .js files) the branch you just created using the `git add` command:

```
git add CONTRIBUTORS.md
```

Now commit those changes using the `git commit` command:
```
git commit -m "<changes made>"
```
replacing `<changes made>` with a description of your work. Look over Chris Beams' article on [how to write a proper commit message](https://chris.beams.io/posts/git-commit/).

## Push changes to GitHub

Push your changes using the command `git push`:
```
git push origin <add-your-branch>
```
replacing `<add-your-branch>` with the name of the branch you created earlier.

## Submit your changes for review

If you go to your repository on GitHub, you'll see a  `Compare & pull request` button.  Click on that button.

Now submit the pull request.

<img style="float: right;" src="pull-request.png" alt="submit pull request" />

Soon I'll be merging all your changes into the master branch of this project. You will get a notification email once the changes have been merged.

## Celebrate

You've just contributed to open source! Congrats :) Here is a cat. Go crazy.

![Alt Text](https://media.giphy.com/media/3o7WTOo4J9CBvHzpzG/giphy.gif)
