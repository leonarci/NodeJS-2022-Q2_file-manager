1. Task: [Task link](https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/file-manager/assignment.md)
2. Solutions screenshot:
![image](https://user-images.githubusercontent.com/29276703/173246493-bbf72e96-79ac-49af-b8c7-ebe2802f94e4.png)
3. Deploy: please, clone [this repo](https://github.com/leonarci/NodeJS-2022-Q2_file-manager/tree/development) (link to branch with solutions) to check the solutions.
4. Done 12.06.2022 / Deadline 12.06.2022
5. Score: 320 / 320

## Scoring: File Manager

[link](https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/file-manager/score.md)
You can find same info in **Readme.md**

### Additional information

1. to provide path with spaces you need to use backslashes before spaces.
    1.1. for example: `add new\ file` or `cp new\ file new\ dir\new \file`
    1.2. so backslash without space after it means separation of the path, backslash with space after means that there is space in a filename
2. for compression operation feel free to use any filename (except existed). for better usability provide `.br` extension to the end of destination (archive filename)

## Basic Scope
- General
    - [x] **+6** Application accepts username and prints proper message
    - [x] **+10** Application exits if user pressed `ctrl+c` or sent `.exit` command and proper message is printed

![image](https://user-images.githubusercontent.com/29276703/173247073-6b335a85-745f-4d7e-8510-e5a61c3b4327.png)

- Operations fail
    - [x] **+20** Attempts to perform an operation on a non-existent file or work on a non-existent path result in the operation fail
        for unknown command or invalid number of arguments FileSystemError is thrown with message "Invalid input", plus information about what is invalid.
        if input was valid, but given path or paths weren't valid FileSystemError is thrown with message "Operation failed", plus information about the reason.
    - [x] **+10** Operation fail doesn't crash application
        all errors are caught and their massage are printed into console   

![image](https://user-images.githubusercontent.com/29276703/173247783-636fcf22-37bd-4973-8557-04c2472db0da.png)

- Navigation & working directory operations implemented properly
    - [x] **+10** Go upper from current directory
          `up` command. provided in root directory doesn't change the directory
    - [x] **+10** Go to dedicated folder from current directory
          `cd path_to_folder` path can be both absolute or relative
    - [x] **+10** List all files and folders in current directory
          `ls` prints array of files and folders in current directory

![image](https://user-images.githubusercontent.com/29276703/173248063-923f60b4-fd1e-4175-9241-d55e5247e594.png)
![image](https://user-images.githubusercontent.com/29276703/173248121-ff68ccf3-34af-430d-8c93-76d41ad7fda6.png)

- Basic operations with files implemented properly
    - [x] **+10** Read file and print it's content in console
          `cat path_to_file`

![image](https://user-images.githubusercontent.com/29276703/173248171-b25a7de1-f136-455e-9e6d-ccd9d3ac9c82.png)

    - [x] **+10** Create empty file
          `add new_file_name`
    - [x] **+10** Rename file
          `rn filename new_filename`
    - [x] **+10** Copy file
          `cp path_to_file path_to_new_directory`
    - [x] **+10** Move file
          `mv path_to_file path_to_new_directory`
    - [x] **+10** Delete file
          `rm path_to_file`

![image](https://user-images.githubusercontent.com/29276703/173248323-d56e2e57-86c8-466a-a82b-9184f2b2c178.png)

- Operating system info (prints following information in console) implemented properly
    - [x] **+6** Get EOL (default system End-Of-Line)
          `os --EOL`
    - [x] **+10** Get host machine CPUs info (overall amount of CPUS plus model and clock rate (in GHz) for each of them)
         `os --cpus`
    - [x] **+6** Get home directory
         `os --homedir`
    - [x] **+6** Get current *system user name* (Do not confuse with the username that is set when the application starts)
         `os --username`
    - [x] **+6** Get CPU architecture for which Node.js binary has compiled
          `os --architecture`

![image](https://user-images.githubusercontent.com/29276703/173248637-efec6afc-b54c-475c-b7cd-0f461184955a.png)

- Hash calculation implemented properly
    - [x] **+20** Calculate hash for file
          `hash path_to_file`

![image](https://user-images.githubusercontent.com/29276703/173248668-1345ec32-1cc7-49da-812c-b10aa7e4eef7.png)

- Compress and decompress operations
    - [x] **+20** Compress file (using Brotli algorithm)
          `compress path_to_file path_to_destination`
    - [x] **+20** Decompress file (using Brotli algorithm)
          `decompress path_to_file path_to_destination`

![image](https://user-images.githubusercontent.com/29276703/173248915-bf401a2e-dc8f-4c28-8395-0eaac8389e40.png)

## Advanced Scope

- [x] **+50** All files operations with reading/writing should be performed using Streams API
      `cat, cp, mv, hash, compress, decompress` operations performed using Steams API. 
      createReadStream, createWriteStream are used for this purpose. screenshot from Stream module form NodeJs Docs.

![image](https://user-images.githubusercontent.com/29276703/173249057-21a015c1-e16e-443b-8269-cae9aeb2991c.png)

- [x] **+20** Codebase is written in ESM modules instead of CommonJS
      `import, export` syntax is used
- [x] **+20** Codebase is separated (at least 7 modules)
      I feel that maybe I have to many modules 😁

Feel free to contact me in case you have any questions
1. comment this PR
3. telegram: [@leonarci](https://t.me/leonarci)
4. discord: Leon Arci#7731

