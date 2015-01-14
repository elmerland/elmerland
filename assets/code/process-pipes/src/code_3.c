#include <stdio.h>
#include <unistd.h>
#include <strings.h>

#define IN 0
#define OUT 1

int main(void) {
  int pipefd[2];
  if (pipe(pipefd) == -1) {
    perror("Couldn't create the pipe");
  }
  int f = fork();
  if (f == -1) {
    perror("Couldn't fork a child process");
  } else if (f == 0) {
    // Inside child process
    dup2(pipefd[OUT], STDOUT_FILENO);
    close(pipefd[OUT]);
    close(pipefd[IN]);
    char *cmd[] = {"ls", "-l", (char *) 0};
    execvp("ls", cmd);
  } else {
    // Inside parent process
    close(pipefd[OUT]);
    int len = 5024;
    char str_buff[len];
    bzero(str_buff, len); // Zero out buffer
    read(pipefd[IN], str_buff, len);
    printf("Receiving message from child...\n");
    printf("Message:\n%s", str_buff);
  }
}