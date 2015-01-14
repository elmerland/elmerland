#include <stdio.h>
#include <unistd.h>

int main(void) {
  int pipefd[2];
  if (pipe(pipefd) == -1) {
    perror("Couldn't create the pipe");
  }
  int fd_read  = pipefd[0];
  int fd_write = pipefd[1];
  printf("Pipe File Descriptors\n");
  printf("  Read end:  %d\n", fd_read);
  printf("  Write end: %d\n", fd_write);
}