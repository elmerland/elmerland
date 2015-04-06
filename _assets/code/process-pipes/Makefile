# Compile code examples
# By: Elmer Landaverde (elmerlandaverde@gmail.com)

CC = gcc
CFLAGS = -Wall -Werror

COMP := $(CC) $(CFLAGS)

OBJDIR := obj
BINDIR := bin
SRCDIR := src

FILES := code_1 code_2 code_3
SRCS := $(addprefix $(SRCDIR)/, $(addsuffix .c, $(FILES)))
OBJS  := $(addprefix $(OBJDIR)/, $(addsuffix .o, $(FILES)))
BINS := $(addprefix $(BINDIR)/, $(FILES))

.PHONY := all clean

all: $(BINS)

$(OBJS): | $(OBJDIR)
$(BINS): | $(BINDIR)

$(OBJDIR):
	mkdir -p $(OBJDIR)
$(BINDIR):
	mkdir -p $(BINDIR)

$(OBJDIR)/%.o: $(SRCS)
	$(COMP) -o $@ -c $<

$(BINDIR)/%: $(OBJS)
	$(COMP) -o $(BINDIR)/code_1 $(OBJDIR)/code_1.o
	$(COMP) -o $(BINDIR)/code_2 $(OBJDIR)/code_2.o
	$(COMP) -o $(BINDIR)/code_3 $(OBJDIR)/code_3.o

# Remove compiled files.
clean:
	rm -fr $(BINDIR)/ $(OBJDIR)/