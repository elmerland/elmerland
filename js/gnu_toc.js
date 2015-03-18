if (!$.gnu_manual) { $.gnu_manual = {}; }
$.gnu_manual.toc = [
{"href":"Introduction.html#Introduction"                                                     ,"name":"1 Introduction"                                                            ,"list":[
{"href":"Getting-Started.html#Getting-Started"                                               ,"name":"1.1 Getting Started"                                                       ,"list":null},
{"href":"Standards-and-Portability.html#Standards-and-Portability"                           ,"name":"1.2 Standards and Portability"                                             ,"list":[
{"href":"ISO-C.html#ISO-C"                                                                   ,"name":"1.2.1 ISO C"                                                               ,"list":null},
{"href":"POSIX.html#POSIX"                                                                   ,"name":"1.2.2 POSIX (The Portable Operating System Interface)"                     ,"list":[
{"href":"POSIX-Safety-Concepts.html#POSIX-Safety-Concepts"                                   ,"name":"1.2.2.1 POSIX Safety Concepts"                                             ,"list":null},
{"href":"Unsafe-Features.html#Unsafe-Features"                                               ,"name":"1.2.2.2 Unsafe Features"                                                   ,"list":null},
{"href":"Conditionally-Safe-Features.html#Conditionally-Safe-Features"                       ,"name":"1.2.2.3 Conditionally Safe Features"                                       ,"list":null},
{"href":"Other-Safety-Remarks.html#Other-Safety-Remarks"                                     ,"name":"1.2.2.4 Other Safety Remarks"                                              ,"list":null}]},
{"href":"Berkeley-Unix.html#Berkeley-Unix"                                                   ,"name":"1.2.3 Berkeley Unix"                                                       ,"list":null},
{"href":"SVID.html#SVID"                                                                     ,"name":"1.2.4 SVID (The System V Interface Description)"                           ,"list":null},
{"href":"XPG.html#XPG"                                                                       ,"name":"1.2.5 XPG (The X/Open Portability Guide)"                                  ,"list":null}]},
{"href":"Using-the-Library.html#Using-the-Library"                                           ,"name":"1.3 Using the Library"                                                     ,"list":[
{"href":"Header-Files.html#Header-Files"                                                     ,"name":"1.3.1 Header Files"                                                        ,"list":null},
{"href":"Macro-Definitions.html#Macro-Definitions"                                           ,"name":"1.3.2 Macro Definitions of Functions"                                      ,"list":null},
{"href":"Reserved-Names.html#Reserved-Names"                                                 ,"name":"1.3.3 Reserved Names"                                                      ,"list":null},
{"href":"Feature-Test-Macros.html#Feature-Test-Macros"                                       ,"name":"1.3.4 Feature Test Macros"                                                 ,"list":null}]},
{"href":"Roadmap-to-the-Manual.html#Roadmap-to-the-Manual"                                   ,"name":"1.4 Roadmap to the Manual"                                                 ,"list":null}]},
{"href":"Error-Reporting.html#Error-Reporting"                                               ,"name":"2 Error Reporting"                                                         ,"list":[
{"href":"Checking-for-Errors.html#Checking-for-Errors"                                       ,"name":"2.1 Checking for Errors"                                                   ,"list":null},
{"href":"Error-Codes.html#Error-Codes"                                                       ,"name":"2.2 Error Codes"                                                           ,"list":null},
{"href":"Error-Messages.html#Error-Messages"                                                 ,"name":"2.3 Error Messages"                                                        ,"list":null}]},
{"href":"Memory.html#Memory"                                                                 ,"name":"3 Virtual Memory Allocation And Paging"                                    ,"list":[
{"href":"Memory-Concepts.html#Memory-Concepts"                                               ,"name":"3.1 Process Memory Concepts"                                               ,"list":null},
{"href":"Memory-Allocation.html#Memory-Allocation"                                           ,"name":"3.2 Allocating Storage For Program Data"                                   ,"list":[
{"href":"Memory-Allocation-and-C.html#Memory-Allocation-and-C"                               ,"name":"3.2.1 Memory Allocation in C Programs"                                     ,"list":[
{"href":"Memory-Allocation-and-C.html#Dynamic-Memory-Allocation"                             ,"name":"3.2.1.1 Dynamic Memory Allocation"                                         ,"list":null}]},
{"href":"Unconstrained-Allocation.html#Unconstrained-Allocation"                             ,"name":"3.2.2 Unconstrained Allocation"                                            ,"list":[
{"href":"Basic-Allocation.html#Basic-Allocation"                                             ,"name":"3.2.2.1 Basic Memory Allocation"                                           ,"list":null},
{"href":"Malloc-Examples.html#Malloc-Examples"                                               ,"name":"3.2.2.2 Examples of <code>malloc</code>"                                   ,"list":null},
{"href":"Freeing-after-Malloc.html#Freeing-after-Malloc"                                     ,"name":"3.2.2.3 Freeing Memory Allocated with <code>malloc</code>"                 ,"list":null},
{"href":"Changing-Block-Size.html#Changing-Block-Size"                                       ,"name":"3.2.2.4 Changing the Size of a Block"                                      ,"list":null},
{"href":"Allocating-Cleared-Space.html#Allocating-Cleared-Space"                             ,"name":"3.2.2.5 Allocating Cleared Space"                                          ,"list":null},
{"href":"Efficiency-and-Malloc.html#Efficiency-and-Malloc"                                   ,"name":"3.2.2.6 Efficiency Considerations for <code>malloc</code>"                 ,"list":null},
{"href":"Aligned-Memory-Blocks.html#Aligned-Memory-Blocks"                                   ,"name":"3.2.2.7 Allocating Aligned Memory Blocks"                                  ,"list":null},
{"href":"Malloc-Tunable-Parameters.html#Malloc-Tunable-Parameters"                           ,"name":"3.2.2.8 Malloc Tunable Parameters"                                         ,"list":null},
{"href":"Heap-Consistency-Checking.html#Heap-Consistency-Checking"                           ,"name":"3.2.2.9 Heap Consistency Checking"                                         ,"list":null},
{"href":"Hooks-for-Malloc.html#Hooks-for-Malloc"                                             ,"name":"3.2.2.10 Memory Allocation Hooks"                                          ,"list":null},
{"href":"Statistics-of-Malloc.html#Statistics-of-Malloc"                                     ,"name":"3.2.2.11 Statistics for Memory Allocation with <code>malloc</code>"        ,"list":null},
{"href":"Summary-of-Malloc.html#Summary-of-Malloc"                                           ,"name":"3.2.2.12 Summary of <code>malloc</code>-Related Functions"                 ,"list":null}]},
{"href":"Allocation-Debugging.html#Allocation-Debugging"                                     ,"name":"3.2.3 Allocation Debugging"                                                ,"list":[
{"href":"Tracing-malloc.html#Tracing-malloc"                                                 ,"name":"3.2.3.1 How to install the tracing functionality"                          ,"list":null},
{"href":"Using-the-Memory-Debugger.html#Using-the-Memory-Debugger"                           ,"name":"3.2.3.2 Example program excerpts"                                          ,"list":null},
{"href":"Tips-for-the-Memory-Debugger.html#Tips-for-the-Memory-Debugger"                     ,"name":"3.2.3.3 Some more or less clever ideas"                                    ,"list":null},
{"href":"Interpreting-the-traces.html#Interpreting-the-traces"                               ,"name":"3.2.3.4 Interpreting the traces"                                           ,"list":null}]},
{"href":"Obstacks.html#Obstacks"                                                             ,"name":"3.2.4 Obstacks"                                                            ,"list":[
{"href":"Creating-Obstacks.html#Creating-Obstacks"                                           ,"name":"3.2.4.1 Creating Obstacks"                                                 ,"list":null},
{"href":"Preparing-for-Obstacks.html#Preparing-for-Obstacks"                                 ,"name":"3.2.4.2 Preparing for Using Obstacks"                                      ,"list":null},
{"href":"Allocation-in-an-Obstack.html#Allocation-in-an-Obstack"                             ,"name":"3.2.4.3 Allocation in an Obstack"                                          ,"list":null},
{"href":"Freeing-Obstack-Objects.html#Freeing-Obstack-Objects"                               ,"name":"3.2.4.4 Freeing Objects in an Obstack"                                     ,"list":null},
{"href":"Obstack-Functions.html#Obstack-Functions"                                           ,"name":"3.2.4.5 Obstack Functions and Macros"                                      ,"list":null},
{"href":"Growing-Objects.html#Growing-Objects"                                               ,"name":"3.2.4.6 Growing Objects"                                                   ,"list":null},
{"href":"Extra-Fast-Growing.html#Extra-Fast-Growing"                                         ,"name":"3.2.4.7 Extra Fast Growing Objects"                                        ,"list":null},
{"href":"Status-of-an-Obstack.html#Status-of-an-Obstack"                                     ,"name":"3.2.4.8 Status of an Obstack"                                              ,"list":null},
{"href":"Obstacks-Data-Alignment.html#Obstacks-Data-Alignment"                               ,"name":"3.2.4.9 Alignment of Data in Obstacks"                                     ,"list":null},
{"href":"Obstack-Chunks.html#Obstack-Chunks"                                                 ,"name":"3.2.4.10 Obstack Chunks"                                                   ,"list":null},
{"href":"Summary-of-Obstacks.html#Summary-of-Obstacks"                                       ,"name":"3.2.4.11 Summary of Obstack Functions"                                     ,"list":null}]},
{"href":"Variable-Size-Automatic.html#Variable-Size-Automatic"                               ,"name":"3.2.5 Automatic Storage with Variable Size"                                ,"list":[
{"href":"Alloca-Example.html#Alloca-Example"                                                 ,"name":"3.2.5.1 <code>alloca</code> Example"                                       ,"list":null},
{"href":"Advantages-of-Alloca.html#Advantages-of-Alloca"                                     ,"name":"3.2.5.2 Advantages of <code>alloca</code>"                                 ,"list":null},
{"href":"Disadvantages-of-Alloca.html#Disadvantages-of-Alloca"                               ,"name":"3.2.5.3 Disadvantages of <code>alloca</code>"                              ,"list":null},
{"href":"GNU-C-Variable_002dSize-Arrays.html#GNU-C-Variable_002dSize-Arrays"                 ,"name":"3.2.5.4 GNU C Variable-Size Arrays"                                        ,"list":null}]}]},
{"href":"Resizing-the-Data-Segment.html#Resizing-the-Data-Segment"                           ,"name":"3.3 Resizing the Data Segment"                                             ,"list":null},
{"href":"Locking-Pages.html#Locking-Pages"                                                   ,"name":"3.4 Locking Pages"                                                         ,"list":[
{"href":"Why-Lock-Pages.html#Why-Lock-Pages"                                                 ,"name":"3.4.1 Why Lock Pages"                                                      ,"list":null},
{"href":"Locked-Memory-Details.html#Locked-Memory-Details"                                   ,"name":"3.4.2 Locked Memory Details"                                               ,"list":null},
{"href":"Page-Lock-Functions.html#Page-Lock-Functions"                                       ,"name":"3.4.3 Functions To Lock And Unlock Pages"                                  ,"list":null}]}]},
{"href":"Character-Handling.html#Character-Handling"                                         ,"name":"4 Character Handling"                                                      ,"list":[
{"href":"Classification-of-Characters.html#Classification-of-Characters"                     ,"name":"4.1 Classification of Characters"                                          ,"list":null},
{"href":"Case-Conversion.html#Case-Conversion"                                               ,"name":"4.2 Case Conversion"                                                       ,"list":null},
{"href":"Classification-of-Wide-Characters.html#Classification-of-Wide-Characters"           ,"name":"4.3 Character class determination for wide characters"                     ,"list":null},
{"href":"Using-Wide-Char-Classes.html#Using-Wide-Char-Classes"                               ,"name":"4.4 Notes on using the wide character classes"                             ,"list":null},
{"href":"Wide-Character-Case-Conversion.html#Wide-Character-Case-Conversion"                 ,"name":"4.5 Mapping of wide characters."                                           ,"list":null}]},
{"href":"String-and-Array-Utilities.html#String-and-Array-Utilities"                         ,"name":"5 String and Array Utilities"                                              ,"list":[
{"href":"Representation-of-Strings.html#Representation-of-Strings"                           ,"name":"5.1 Representation of Strings"                                             ,"list":null},
{"href":"String_002fArray-Conventions.html#String_002fArray-Conventions"                     ,"name":"5.2 String and Array Conventions"                                          ,"list":null},
{"href":"String-Length.html#String-Length"                                                   ,"name":"5.3 String Length"                                                         ,"list":null},
{"href":"Copying-and-Concatenation.html#Copying-and-Concatenation"                           ,"name":"5.4 Copying and Concatenation"                                             ,"list":null},
{"href":"String_002fArray-Comparison.html#String_002fArray-Comparison"                       ,"name":"5.5 String/Array Comparison"                                               ,"list":null},
{"href":"Collation-Functions.html#Collation-Functions"                                       ,"name":"5.6 Collation Functions"                                                   ,"list":null},
{"href":"Search-Functions.html#Search-Functions"                                             ,"name":"5.7 Search Functions"                                                      ,"list":[
{"href":"Search-Functions.html#Compatibility-String-Search-Functions"                        ,"name":"5.7.1 Compatibility String Search Functions"                               ,"list":null}]},
{"href":"Finding-Tokens-in-a-String.html#Finding-Tokens-in-a-String"                         ,"name":"5.8 Finding Tokens in a String"                                            ,"list":null},
{"href":"strfry.html#strfry"                                                                 ,"name":"5.9 strfry"                                                                ,"list":null},
{"href":"Trivial-Encryption.html#Trivial-Encryption"                                         ,"name":"5.10 Trivial Encryption"                                                   ,"list":null},
{"href":"Encode-Binary-Data.html#Encode-Binary-Data"                                         ,"name":"5.11 Encode Binary Data"                                                   ,"list":null},
{"href":"Argz-and-Envz-Vectors.html#Argz-and-Envz-Vectors"                                   ,"name":"5.12 Argz and Envz Vectors"                                                ,"list":[
{"href":"Argz-Functions.html#Argz-Functions"                                                 ,"name":"5.12.1 Argz Functions"                                                     ,"list":null},
{"href":"Envz-Functions.html#Envz-Functions"                                                 ,"name":"5.12.2 Envz Functions"                                                     ,"list":null}]}]},
{"href":"Character-Set-Handling.html#Character-Set-Handling"                                 ,"name":"6 Character Set Handling"                                                  ,"list":[
{"href":"Extended-Char-Intro.html#Extended-Char-Intro"                                       ,"name":"6.1 Introduction to Extended Characters"                                   ,"list":null},
{"href":"Charset-Function-Overview.html#Charset-Function-Overview"                           ,"name":"6.2 Overview about Character Handling Functions"                           ,"list":null},
{"href":"Restartable-multibyte-conversion.html#Restartable-multibyte-conversion"             ,"name":"6.3 Restartable Multibyte Conversion Functions"                            ,"list":[
{"href":"Selecting-the-Conversion.html#Selecting-the-Conversion"                             ,"name":"6.3.1 Selecting the conversion and its properties"                         ,"list":null},
{"href":"Keeping-the-state.html#Keeping-the-state"                                           ,"name":"6.3.2 Representing the state of the conversion"                            ,"list":null},
{"href":"Converting-a-Character.html#Converting-a-Character"                                 ,"name":"6.3.3 Converting Single Characters"                                        ,"list":null},
{"href":"Converting-Strings.html#Converting-Strings"                                         ,"name":"6.3.4 Converting Multibyte and Wide Character Strings"                     ,"list":null},
{"href":"Multibyte-Conversion-Example.html#Multibyte-Conversion-Example"                     ,"name":"6.3.5 A Complete Multibyte Conversion Example"                             ,"list":null}]},
{"href":"Non_002dreentrant-Conversion.html#Non_002dreentrant-Conversion"                     ,"name":"6.4 Non-reentrant Conversion Function"                                     ,"list":[
{"href":"Non_002dreentrant-Character-Conversion.html#Non_002dreentrant-Character-Conversion" ,"name":"6.4.1 Non-reentrant Conversion of Single Characters"                       ,"list":null},
{"href":"Non_002dreentrant-String-Conversion.html#Non_002dreentrant-String-Conversion"       ,"name":"6.4.2 Non-reentrant Conversion of Strings"                                 ,"list":null},
{"href":"Shift-State.html#Shift-State"                                                       ,"name":"6.4.3 States in Non-reentrant Functions"                                   ,"list":null}]},
{"href":"Generic-Charset-Conversion.html#Generic-Charset-Conversion"                         ,"name":"6.5 Generic Charset Conversion"                                            ,"list":[
{"href":"Generic-Conversion-Interface.html#Generic-Conversion-Interface"                     ,"name":"6.5.1 Generic Character Set Conversion Interface"                          ,"list":null},
{"href":"iconv-Examples.html#iconv-Examples"                                                 ,"name":"6.5.2 A complete <code>iconv</code> example"                               ,"list":null},
{"href":"Other-iconv-Implementations.html#Other-iconv-Implementations"                       ,"name":"6.5.3 Some Details about other <code>iconv</code> Implementations"         ,"list":null},
{"href":"glibc-iconv-Implementation.html#glibc-iconv-Implementation"                         ,"name":"6.5.4 The <code>iconv</code> Implementation in the GNU C Library"          ,"list":[
{"href":"glibc-iconv-Implementation.html#Format-of-gconv_002dmodules-files"                  ,"name":"6.5.4.1 Format of <samp>gconv-modules</samp> files"                        ,"list":null},
{"href":"glibc-iconv-Implementation.html#Finding-the-conversion-path-in-iconv"               ,"name":"6.5.4.2 Finding the conversion path in <code>iconv</code>"                 ,"list":null},
{"href":"glibc-iconv-Implementation.html#iconv-module-data-structures"                       ,"name":"6.5.4.3 <code>iconv</code> module data structures"                         ,"list":null},
{"href":"glibc-iconv-Implementation.html#iconv-module-interfaces"                            ,"name":"6.5.4.4 <code>iconv</code> module interfaces"                              ,"list":null}]}]}]},
{"href":"Locales.html#Locales"                                                               ,"name":"7 Locales and Internationalization"                                        ,"list":[
{"href":"Effects-of-Locale.html#Effects-of-Locale"                                           ,"name":"7.1 What Effects a Locale Has"                                             ,"list":null},
{"href":"Choosing-Locale.html#Choosing-Locale"                                               ,"name":"7.2 Choosing a Locale"                                                     ,"list":null},
{"href":"Locale-Categories.html#Locale-Categories"                                           ,"name":"7.3 Locale Categories"                                                     ,"list":null},
{"href":"Setting-the-Locale.html#Setting-the-Locale"                                         ,"name":"7.4 How Programs Set the Locale"                                           ,"list":null},
{"href":"Standard-Locales.html#Standard-Locales"                                             ,"name":"7.5 Standard Locales"                                                      ,"list":null},
{"href":"Locale-Names.html#Locale-Names"                                                     ,"name":"7.6 Locale Names"                                                          ,"list":null},
{"href":"Locale-Information.html#Locale-Information"                                         ,"name":"7.7 Accessing Locale Information"                                          ,"list":[
{"href":"The-Lame-Way-to-Locale-Data.html#The-Lame-Way-to-Locale-Data"                       ,"name":"7.7.1 <code>localeconv</code>: It is portable but …"                       ,"list":[
{"href":"General-Numeric.html#General-Numeric"                                               ,"name":"7.7.1.1 Generic Numeric Formatting Parameters"                             ,"list":null},
{"href":"Currency-Symbol.html#Currency-Symbol"                                               ,"name":"7.7.1.2 Printing the Currency Symbol"                                      ,"list":null},
{"href":"Sign-of-Money-Amount.html#Sign-of-Money-Amount"                                     ,"name":"7.7.1.3 Printing the Sign of a Monetary Amount"                            ,"list":null}]},
{"href":"The-Elegant-and-Fast-Way.html#The-Elegant-and-Fast-Way"                             ,"name":"7.7.2 Pinpoint Access to Locale Data"                                      ,"list":null}]},
{"href":"Formatting-Numbers.html#Formatting-Numbers"                                         ,"name":"7.8 A dedicated function to format numbers"                                ,"list":null},
{"href":"Yes_002dor_002dNo-Questions.html#Yes_002dor_002dNo-Questions"                       ,"name":"7.9 Yes-or-No Questions"                                                   ,"list":null}]},
{"href":"Message-Translation.html#Message-Translation"                                       ,"name":"8 Message Translation"                                                     ,"list":[
{"href":"Message-catalogs-a-la-X_002fOpen.html#Message-catalogs-a-la-X_002fOpen"             ,"name":"8.1 X/Open Message Catalog Handling"                                       ,"list":[
{"href":"The-catgets-Functions.html#The-catgets-Functions"                                   ,"name":"8.1.1 The <code>catgets</code> function family"                            ,"list":null},
{"href":"The-message-catalog-files.html#The-message-catalog-files"                           ,"name":"8.1.2 Format of the message catalog files"                                 ,"list":null},
{"href":"The-gencat-program.html#The-gencat-program"                                         ,"name":"8.1.3 Generate Message Catalogs files"                                     ,"list":null},
{"href":"Common-Usage.html#Common-Usage"                                                     ,"name":"8.1.4 How to use the <code>catgets</code> interface"                       ,"list":[
{"href":"Common-Usage.html#Not-using-symbolic-names"                                         ,"name":"8.1.4.1 Not using symbolic names"                                          ,"list":null},
{"href":"Common-Usage.html#Using-symbolic-names"                                             ,"name":"8.1.4.2 Using symbolic names"                                              ,"list":null},
{"href":"Common-Usage.html#How-does-to-this-allow-to-develop"                                ,"name":"8.1.4.3 How does to this allow to develop"                                 ,"list":null}]}]},
{"href":"The-Uniforum-approach.html#The-Uniforum-approach"                                   ,"name":"8.2 The Uniforum approach to Message Translation"                          ,"list":[
{"href":"Message-catalogs-with-gettext.html#Message-catalogs-with-gettext"                   ,"name":"8.2.1 The <code>gettext</code> family of functions"                        ,"list":[
{"href":"Translation-with-gettext.html#Translation-with-gettext"                             ,"name":"8.2.1.1 What has to be done to translate a message?"                       ,"list":null},
{"href":"Locating-gettext-catalog.html#Locating-gettext-catalog"                             ,"name":"8.2.1.2 How to determine which catalog to be used"                         ,"list":null},
{"href":"Advanced-gettext-functions.html#Advanced-gettext-functions"                         ,"name":"8.2.1.3 Additional functions for more complicated situations"              ,"list":null},
{"href":"Charset-conversion-in-gettext.html#Charset-conversion-in-gettext"                   ,"name":"8.2.1.4 How to specify the output character set <code>gettext</code> uses" ,"list":null},
{"href":"GUI-program-problems.html#GUI-program-problems"                                     ,"name":"8.2.1.5 How to use <code>gettext</code> in GUI programs"                   ,"list":null},
{"href":"Using-gettextized-software.html#Using-gettextized-software"                         ,"name":"8.2.1.6 User influence on <code>gettext</code>"                            ,"list":null}]},
{"href":"Helper-programs-for-gettext.html#Helper-programs-for-gettext"                       ,"name":"8.2.2 Programs to handle message catalogs for <code>gettext</code>"        ,"list":null}]}]},
{"href":"Searching-and-Sorting.html#Searching-and-Sorting"                                   ,"name":"9 Searching and Sorting"                                                   ,"list":[
{"href":"Comparison-Functions.html#Comparison-Functions"                                     ,"name":"9.1 Defining the Comparison Function"                                      ,"list":null},
{"href":"Array-Search-Function.html#Array-Search-Function"                                   ,"name":"9.2 Array Search Function"                                                 ,"list":null},
{"href":"Array-Sort-Function.html#Array-Sort-Function"                                       ,"name":"9.3 Array Sort Function"                                                   ,"list":null},
{"href":"Search_002fSort-Example.html#Search_002fSort-Example"                               ,"name":"9.4 Searching and Sorting Example"                                         ,"list":null},
{"href":"Hash-Search-Function.html#Hash-Search-Function"                                     ,"name":"9.5 The <code>hsearch</code> function."                                    ,"list":null},
{"href":"Tree-Search-Function.html#Tree-Search-Function"                                     ,"name":"9.6 The <code>tsearch</code> function."                                    ,"list":null}]},
{"href":"Pattern-Matching.html#Pattern-Matching"                                             ,"name":"10 Pattern Matching"                                                       ,"list":[
{"href":"Wildcard-Matching.html#Wildcard-Matching"                                           ,"name":"10.1 Wildcard Matching"                                                    ,"list":null},
{"href":"Globbing.html#Globbing"                                                             ,"name":"10.2 Globbing"                                                             ,"list":[
{"href":"Calling-Glob.html#Calling-Glob"                                                     ,"name":"10.2.1 Calling <code>glob</code>"                                          ,"list":null},
{"href":"Flags-for-Globbing.html#Flags-for-Globbing"                                         ,"name":"10.2.2 Flags for Globbing"                                                 ,"list":null},
{"href":"More-Flags-for-Globbing.html#More-Flags-for-Globbing"                               ,"name":"10.2.3 More Flags for Globbing"                                            ,"list":null}]},
{"href":"Regular-Expressions.html#Regular-Expressions"                                       ,"name":"10.3 Regular Expression Matching"                                          ,"list":[
{"href":"POSIX-Regexp-Compilation.html#POSIX-Regexp-Compilation"                             ,"name":"10.3.1 POSIX Regular Expression Compilation"                               ,"list":null},
{"href":"Flags-for-POSIX-Regexps.html#Flags-for-POSIX-Regexps"                               ,"name":"10.3.2 Flags for POSIX Regular Expressions"                                ,"list":null},
{"href":"Matching-POSIX-Regexps.html#Matching-POSIX-Regexps"                                 ,"name":"10.3.3 Matching a Compiled POSIX Regular Expression"                       ,"list":null},
{"href":"Regexp-Subexpressions.html#Regexp-Subexpressions"                                   ,"name":"10.3.4 Match Results with Subexpressions"                                  ,"list":null},
{"href":"Subexpression-Complications.html#Subexpression-Complications"                       ,"name":"10.3.5 Complications in Subexpression Matching"                            ,"list":null},
{"href":"Regexp-Cleanup.html#Regexp-Cleanup"                                                 ,"name":"10.3.6 POSIX Regexp Matching Cleanup"                                      ,"list":null}]},
{"href":"Word-Expansion.html#Word-Expansion"                                                 ,"name":"10.4 Shell-Style Word Expansion"                                           ,"list":[
{"href":"Expansion-Stages.html#Expansion-Stages"                                             ,"name":"10.4.1 The Stages of Word Expansion"                                       ,"list":null},
{"href":"Calling-Wordexp.html#Calling-Wordexp"                                               ,"name":"10.4.2 Calling <code>wordexp</code>"                                       ,"list":null},
{"href":"Flags-for-Wordexp.html#Flags-for-Wordexp"                                           ,"name":"10.4.3 Flags for Word Expansion"                                           ,"list":null},
{"href":"Wordexp-Example.html#Wordexp-Example"                                               ,"name":"10.4.4 <code>wordexp</code> Example"                                       ,"list":null},
{"href":"Tilde-Expansion.html#Tilde-Expansion"                                               ,"name":"10.4.5 Details of Tilde Expansion"                                         ,"list":null},
{"href":"Variable-Substitution.html#Variable-Substitution"                                   ,"name":"10.4.6 Details of Variable Substitution"                                   ,"list":null}]}]},
{"href":"I_002fO-Overview.html#I_002fO-Overview"                                             ,"name":"11 Input/Output Overview"                                                  ,"list":[
{"href":"I_002fO-Concepts.html#I_002fO-Concepts"                                             ,"name":"11.1 Input/Output Concepts"                                                ,"list":[
{"href":"Streams-and-File-Descriptors.html#Streams-and-File-Descriptors"                     ,"name":"11.1.1 Streams and File Descriptors"                                       ,"list":null},
{"href":"File-Position.html#File-Position"                                                   ,"name":"11.1.2 File Position"                                                      ,"list":null}]},
{"href":"File-Names.html#File-Names"                                                         ,"name":"11.2 File Names"                                                           ,"list":[
{"href":"Directories.html#Directories"                                                       ,"name":"11.2.1 Directories"                                                        ,"list":null},
{"href":"File-Name-Resolution.html#File-Name-Resolution"                                     ,"name":"11.2.2 File Name Resolution"                                               ,"list":null},
{"href":"File-Name-Errors.html#File-Name-Errors"                                             ,"name":"11.2.3 File Name Errors"                                                   ,"list":null},
{"href":"File-Name-Portability.html#File-Name-Portability"                                   ,"name":"11.2.4 Portability of File Names"                                          ,"list":null}]}]},
{"href":"I_002fO-on-Streams.html#I_002fO-on-Streams"                                         ,"name":"12 Input/Output on Streams"                                                ,"list":[
{"href":"Streams.html#Streams"                                                               ,"name":"12.1 Streams"                                                              ,"list":null},
{"href":"Standard-Streams.html#Standard-Streams"                                             ,"name":"12.2 Standard Streams"                                                     ,"list":null},
{"href":"Opening-Streams.html#Opening-Streams"                                               ,"name":"12.3 Opening Streams"                                                      ,"list":null},
{"href":"Closing-Streams.html#Closing-Streams"                                               ,"name":"12.4 Closing Streams"                                                      ,"list":null},
{"href":"Streams-and-Threads.html#Streams-and-Threads"                                       ,"name":"12.5 Streams and Threads"                                                  ,"list":null},
{"href":"Streams-and-I18N.html#Streams-and-I18N"                                             ,"name":"12.6 Streams in Internationalized Applications"                            ,"list":null},
{"href":"Simple-Output.html#Simple-Output"                                                   ,"name":"12.7 Simple Output by Characters or Lines"                                 ,"list":null},
{"href":"Character-Input.html#Character-Input"                                               ,"name":"12.8 Character Input"                                                      ,"list":null},
{"href":"Line-Input.html#Line-Input"                                                         ,"name":"12.9 Line-Oriented Input"                                                  ,"list":null},
{"href":"Unreading.html#Unreading"                                                           ,"name":"12.10 Unreading"                                                           ,"list":[
{"href":"Unreading-Idea.html#Unreading-Idea"                                                 ,"name":"12.10.1 What Unreading Means"                                              ,"list":null},
{"href":"How-Unread.html#How-Unread"                                                         ,"name":"12.10.2 Using <code>ungetc</code> To Do Unreading"                         ,"list":null}]},
{"href":"Block-Input_002fOutput.html#Block-Input_002fOutput"                                 ,"name":"12.11 Block Input/Output"                                                  ,"list":null},
{"href":"Formatted-Output.html#Formatted-Output"                                             ,"name":"12.12 Formatted Output"                                                    ,"list":[
{"href":"Formatted-Output-Basics.html#Formatted-Output-Basics"                               ,"name":"12.12.1 Formatted Output Basics"                                           ,"list":null},
{"href":"Output-Conversion-Syntax.html#Output-Conversion-Syntax"                             ,"name":"12.12.2 Output Conversion Syntax"                                          ,"list":null},
{"href":"Table-of-Output-Conversions.html#Table-of-Output-Conversions"                       ,"name":"12.12.3 Table of Output Conversions"                                       ,"list":null},
{"href":"Integer-Conversions.html#Integer-Conversions"                                       ,"name":"12.12.4 Integer Conversions"                                               ,"list":null},
{"href":"Floating_002dPoint-Conversions.html#Floating_002dPoint-Conversions"                 ,"name":"12.12.5 Floating-Point Conversions"                                        ,"list":null},
{"href":"Other-Output-Conversions.html#Other-Output-Conversions"                             ,"name":"12.12.6 Other Output Conversions"                                          ,"list":null},
{"href":"Formatted-Output-Functions.html#Formatted-Output-Functions"                         ,"name":"12.12.7 Formatted Output Functions"                                        ,"list":null},
{"href":"Dynamic-Output.html#Dynamic-Output"                                                 ,"name":"12.12.8 Dynamically Allocating Formatted Output"                           ,"list":null},
{"href":"Variable-Arguments-Output.html#Variable-Arguments-Output"                           ,"name":"12.12.9 Variable Arguments Output Functions"                               ,"list":null},
{"href":"Parsing-a-Template-String.html#Parsing-a-Template-String"                           ,"name":"12.12.10 Parsing a Template String"                                        ,"list":null},
{"href":"Example-of-Parsing.html#Example-of-Parsing"                                         ,"name":"12.12.11 Example of Parsing a Template String"                             ,"list":null}]},
{"href":"Customizing-Printf.html#Customizing-Printf"                                         ,"name":"12.13 Customizing <code>printf</code>"                                     ,"list":[
{"href":"Registering-New-Conversions.html#Registering-New-Conversions"                       ,"name":"12.13.1 Registering New Conversions"                                       ,"list":null},
{"href":"Conversion-Specifier-Options.html#Conversion-Specifier-Options"                     ,"name":"12.13.2 Conversion Specifier Options"                                      ,"list":null},
{"href":"Defining-the-Output-Handler.html#Defining-the-Output-Handler"                       ,"name":"12.13.3 Defining the Output Handler"                                       ,"list":null},
{"href":"Printf-Extension-Example.html#Printf-Extension-Example"                             ,"name":"12.13.4 <code>printf</code> Extension Example"                             ,"list":null},
{"href":"Predefined-Printf-Handlers.html#Predefined-Printf-Handlers"                         ,"name":"12.13.5 Predefined <code>printf</code> Handlers"                           ,"list":null}]},
{"href":"Formatted-Input.html#Formatted-Input"                                               ,"name":"12.14 Formatted Input"                                                     ,"list":[
{"href":"Formatted-Input-Basics.html#Formatted-Input-Basics"                                 ,"name":"12.14.1 Formatted Input Basics"                                            ,"list":null},
{"href":"Input-Conversion-Syntax.html#Input-Conversion-Syntax"                               ,"name":"12.14.2 Input Conversion Syntax"                                           ,"list":null},
{"href":"Table-of-Input-Conversions.html#Table-of-Input-Conversions"                         ,"name":"12.14.3 Table of Input Conversions"                                        ,"list":null},
{"href":"Numeric-Input-Conversions.html#Numeric-Input-Conversions"                           ,"name":"12.14.4 Numeric Input Conversions"                                         ,"list":null},
{"href":"String-Input-Conversions.html#String-Input-Conversions"                             ,"name":"12.14.5 String Input Conversions"                                          ,"list":null},
{"href":"Dynamic-String-Input.html#Dynamic-String-Input"                                     ,"name":"12.14.6 Dynamically Allocating String Conversions"                         ,"list":null},
{"href":"Other-Input-Conversions.html#Other-Input-Conversions"                               ,"name":"12.14.7 Other Input Conversions"                                           ,"list":null},
{"href":"Formatted-Input-Functions.html#Formatted-Input-Functions"                           ,"name":"12.14.8 Formatted Input Functions"                                         ,"list":null},
{"href":"Variable-Arguments-Input.html#Variable-Arguments-Input"                             ,"name":"12.14.9 Variable Arguments Input Functions"                                ,"list":null}]},
{"href":"EOF-and-Errors.html#EOF-and-Errors"                                                 ,"name":"12.15 End-Of-File and Errors"                                              ,"list":null},
{"href":"Error-Recovery.html#Error-Recovery"                                                 ,"name":"12.16 Recovering from errors"                                              ,"list":null},
{"href":"Binary-Streams.html#Binary-Streams"                                                 ,"name":"12.17 Text and Binary Streams"                                             ,"list":null},
{"href":"File-Positioning.html#File-Positioning"                                             ,"name":"12.18 File Positioning"                                                    ,"list":null},
{"href":"Portable-Positioning.html#Portable-Positioning"                                     ,"name":"12.19 Portable File-Position Functions"                                    ,"list":null},
{"href":"Stream-Buffering.html#Stream-Buffering"                                             ,"name":"12.20 Stream Buffering"                                                    ,"list":[
{"href":"Buffering-Concepts.html#Buffering-Concepts"                                         ,"name":"12.20.1 Buffering Concepts"                                                ,"list":null},
{"href":"Flushing-Buffers.html#Flushing-Buffers"                                             ,"name":"12.20.2 Flushing Buffers"                                                  ,"list":null},
{"href":"Controlling-Buffering.html#Controlling-Buffering"                                   ,"name":"12.20.3 Controlling Which Kind of Buffering"                               ,"list":null}]},
{"href":"Other-Kinds-of-Streams.html#Other-Kinds-of-Streams"                                 ,"name":"12.21 Other Kinds of Streams"                                              ,"list":[
{"href":"String-Streams.html#String-Streams"                                                 ,"name":"12.21.1 String Streams"                                                    ,"list":null},
{"href":"Custom-Streams.html#Custom-Streams"                                                 ,"name":"12.21.2 Programming Your Own Custom Streams"                               ,"list":[
{"href":"Streams-and-Cookies.html#Streams-and-Cookies"                                       ,"name":"12.21.2.1 Custom Streams and Cookies"                                      ,"list":null},
{"href":"Hook-Functions.html#Hook-Functions"                                                 ,"name":"12.21.2.2 Custom Stream Hook Functions"                                    ,"list":null}]}]},
{"href":"Formatted-Messages.html#Formatted-Messages"                                         ,"name":"12.22 Formatted Messages"                                                  ,"list":[
{"href":"Printing-Formatted-Messages.html#Printing-Formatted-Messages"                       ,"name":"12.22.1 Printing Formatted Messages"                                       ,"list":null},
{"href":"Adding-Severity-Classes.html#Adding-Severity-Classes"                               ,"name":"12.22.2 Adding Severity Classes"                                           ,"list":null},
{"href":"Example.html#Example"                                                               ,"name":"12.22.3 How to use <code>fmtmsg</code> and <code>addseverity</code>"       ,"list":null}]}]},
{"href":"Low_002dLevel-I_002fO.html#Low_002dLevel-I_002fO"                                   ,"name":"13 Low-Level Input/Output"                                                 ,"list":[
{"href":"Opening-and-Closing-Files.html#Opening-and-Closing-Files"                           ,"name":"13.1 Opening and Closing Files"                                            ,"list":null},
{"href":"I_002fO-Primitives.html#I_002fO-Primitives"                                         ,"name":"13.2 Input and Output Primitives"                                          ,"list":null},
{"href":"File-Position-Primitive.html#File-Position-Primitive"                               ,"name":"13.3 Setting the File Position of a Descriptor"                            ,"list":null},
{"href":"Descriptors-and-Streams.html#Descriptors-and-Streams"                               ,"name":"13.4 Descriptors and Streams"                                              ,"list":null},
{"href":"Stream_002fDescriptor-Precautions.html#Stream_002fDescriptor-Precautions"           ,"name":"13.5 Dangers of Mixing Streams and Descriptors"                            ,"list":[
{"href":"Linked-Channels.html#Linked-Channels"                                               ,"name":"13.5.1 Linked Channels"                                                    ,"list":null},
{"href":"Independent-Channels.html#Independent-Channels"                                     ,"name":"13.5.2 Independent Channels"                                               ,"list":null},
{"href":"Cleaning-Streams.html#Cleaning-Streams"                                             ,"name":"13.5.3 Cleaning Streams"                                                   ,"list":null}]},
{"href":"Scatter_002dGather.html#Scatter_002dGather"                                         ,"name":"13.6 Fast Scatter-Gather I/O"                                              ,"list":null},
{"href":"Memory_002dmapped-I_002fO.html#Memory_002dmapped-I_002fO"                           ,"name":"13.7 Memory-mapped I/O"                                                    ,"list":null},
{"href":"Waiting-for-I_002fO.html#Waiting-for-I_002fO"                                       ,"name":"13.8 Waiting for Input or Output"                                          ,"list":null},
{"href":"Synchronizing-I_002fO.html#Synchronizing-I_002fO"                                   ,"name":"13.9 Synchronizing I/O operations"                                         ,"list":null},
{"href":"Asynchronous-I_002fO.html#Asynchronous-I_002fO"                                     ,"name":"13.10 Perform I/O Operations in Parallel"                                  ,"list":[
{"href":"Asynchronous-Reads_002fWrites.html#Asynchronous-Reads_002fWrites"                   ,"name":"13.10.1 Asynchronous Read and Write Operations"                            ,"list":null},
{"href":"Status-of-AIO-Operations.html#Status-of-AIO-Operations"                             ,"name":"13.10.2 Getting the Status of AIO Operations"                              ,"list":null},
{"href":"Synchronizing-AIO-Operations.html#Synchronizing-AIO-Operations"                     ,"name":"13.10.3 Getting into a Consistent State"                                   ,"list":null},
{"href":"Cancel-AIO-Operations.html#Cancel-AIO-Operations"                                   ,"name":"13.10.4 Cancellation of AIO Operations"                                    ,"list":null},
{"href":"Configuration-of-AIO.html#Configuration-of-AIO"                                     ,"name":"13.10.5 How to optimize the AIO implementation"                            ,"list":null}]},
{"href":"Control-Operations.html#Control-Operations"                                         ,"name":"13.11 Control Operations on Files"                                         ,"list":null},
{"href":"Duplicating-Descriptors.html#Duplicating-Descriptors"                               ,"name":"13.12 Duplicating Descriptors"                                             ,"list":null},
{"href":"Descriptor-Flags.html#Descriptor-Flags"                                             ,"name":"13.13 File Descriptor Flags"                                               ,"list":null},
{"href":"File-Status-Flags.html#File-Status-Flags"                                           ,"name":"13.14 File Status Flags"                                                   ,"list":[
{"href":"Access-Modes.html#Access-Modes"                                                     ,"name":"13.14.1 File Access Modes"                                                 ,"list":null},
{"href":"Open_002dtime-Flags.html#Open_002dtime-Flags"                                       ,"name":"13.14.2 Open-time Flags"                                                   ,"list":null},
{"href":"Operating-Modes.html#Operating-Modes"                                               ,"name":"13.14.3 I/O Operating Modes"                                               ,"list":null},
{"href":"Getting-File-Status-Flags.html#Getting-File-Status-Flags"                           ,"name":"13.14.4 Getting and Setting File Status Flags"                             ,"list":null}]},
{"href":"File-Locks.html#File-Locks"                                                         ,"name":"13.15 File Locks"                                                          ,"list":null},
{"href":"Open-File-Description-Locks.html#Open-File-Description-Locks"                       ,"name":"13.16 Open File Description Locks"                                         ,"list":null},
{"href":"Open-File-Description-Locks-Example.html#Open-File-Description-Locks-Example"       ,"name":"13.17 Open File Description Locks Example"                                 ,"list":null},
{"href":"Interrupt-Input.html#Interrupt-Input"                                               ,"name":"13.18 Interrupt-Driven Input"                                              ,"list":null},
{"href":"IOCTLs.html#IOCTLs"                                                                 ,"name":"13.19 Generic I/O Control operations"                                      ,"list":null}]},
{"href":"File-System-Interface.html#File-System-Interface"                                   ,"name":"14 File System Interface"                                                  ,"list":[
{"href":"Working-Directory.html#Working-Directory"                                           ,"name":"14.1 Working Directory"                                                    ,"list":null},
{"href":"Accessing-Directories.html#Accessing-Directories"                                   ,"name":"14.2 Accessing Directories"                                                ,"list":[
{"href":"Directory-Entries.html#Directory-Entries"                                           ,"name":"14.2.1 Format of a Directory Entry"                                        ,"list":null},
{"href":"Opening-a-Directory.html#Opening-a-Directory"                                       ,"name":"14.2.2 Opening a Directory Stream"                                         ,"list":null},
{"href":"Reading_002fClosing-Directory.html#Reading_002fClosing-Directory"                   ,"name":"14.2.3 Reading and Closing a Directory Stream"                             ,"list":null},
{"href":"Simple-Directory-Lister.html#Simple-Directory-Lister"                               ,"name":"14.2.4 Simple Program to List a Directory"                                 ,"list":null},
{"href":"Random-Access-Directory.html#Random-Access-Directory"                               ,"name":"14.2.5 Random Access in a Directory Stream"                                ,"list":null},
{"href":"Scanning-Directory-Content.html#Scanning-Directory-Content"                         ,"name":"14.2.6 Scanning the Content of a Directory"                                ,"list":null},
{"href":"Simple-Directory-Lister-Mark-II.html#Simple-Directory-Lister-Mark-II"               ,"name":"14.2.7 Simple Program to List a Directory, Mark II"                        ,"list":null}]},
{"href":"Working-with-Directory-Trees.html#Working-with-Directory-Trees"                     ,"name":"14.3 Working with Directory Trees"                                         ,"list":null},
{"href":"Hard-Links.html#Hard-Links"                                                         ,"name":"14.4 Hard Links"                                                           ,"list":null},
{"href":"Symbolic-Links.html#Symbolic-Links"                                                 ,"name":"14.5 Symbolic Links"                                                       ,"list":null},
{"href":"Deleting-Files.html#Deleting-Files"                                                 ,"name":"14.6 Deleting Files"                                                       ,"list":null},
{"href":"Renaming-Files.html#Renaming-Files"                                                 ,"name":"14.7 Renaming Files"                                                       ,"list":null},
{"href":"Creating-Directories.html#Creating-Directories"                                     ,"name":"14.8 Creating Directories"                                                 ,"list":null},
{"href":"File-Attributes.html#File-Attributes"                                               ,"name":"14.9 File Attributes"                                                      ,"list":[
{"href":"Attribute-Meanings.html#Attribute-Meanings"                                         ,"name":"14.9.1 The meaning of the File Attributes"                                 ,"list":null},
{"href":"Reading-Attributes.html#Reading-Attributes"                                         ,"name":"14.9.2 Reading the Attributes of a File"                                   ,"list":null},
{"href":"Testing-File-Type.html#Testing-File-Type"                                           ,"name":"14.9.3 Testing the Type of a File"                                         ,"list":null},
{"href":"File-Owner.html#File-Owner"                                                         ,"name":"14.9.4 File Owner"                                                         ,"list":null},
{"href":"Permission-Bits.html#Permission-Bits"                                               ,"name":"14.9.5 The Mode Bits for Access Permission"                                ,"list":null},
{"href":"Access-Permission.html#Access-Permission"                                           ,"name":"14.9.6 How Your Access to a File is Decided"                               ,"list":null},
{"href":"Setting-Permissions.html#Setting-Permissions"                                       ,"name":"14.9.7 Assigning File Permissions"                                         ,"list":null},
{"href":"Testing-File-Access.html#Testing-File-Access"                                       ,"name":"14.9.8 Testing Permission to Access a File"                                ,"list":null},
{"href":"File-Times.html#File-Times"                                                         ,"name":"14.9.9 File Times"                                                         ,"list":null},
{"href":"File-Size.html#File-Size"                                                           ,"name":"14.9.10 File Size"                                                         ,"list":null}]},
{"href":"Making-Special-Files.html#Making-Special-Files"                                     ,"name":"14.10 Making Special Files"                                                ,"list":null},
{"href":"Temporary-Files.html#Temporary-Files"                                               ,"name":"14.11 Temporary Files"                                                     ,"list":null}]},
{"href":"Pipes-and-FIFOs.html#Pipes-and-FIFOs"                                               ,"name":"15 Pipes and FIFOs"                                                        ,"list":[
{"href":"Creating-a-Pipe.html#Creating-a-Pipe"                                               ,"name":"15.1 Creating a Pipe"                                                      ,"list":null},
{"href":"Pipe-to-a-Subprocess.html#Pipe-to-a-Subprocess"                                     ,"name":"15.2 Pipe to a Subprocess"                                                 ,"list":null},
{"href":"FIFO-Special-Files.html#FIFO-Special-Files"                                         ,"name":"15.3 FIFO Special Files"                                                   ,"list":null},
{"href":"Pipe-Atomicity.html#Pipe-Atomicity"                                                 ,"name":"15.4 Atomicity of Pipe I/O"                                                ,"list":null}]},
{"href":"Sockets.html#Sockets"                                                               ,"name":"16 Sockets"                                                                ,"list":[
{"href":"Socket-Concepts.html#Socket-Concepts"                                               ,"name":"16.1 Socket Concepts"                                                      ,"list":null},
{"href":"Communication-Styles.html#Communication-Styles"                                     ,"name":"16.2 Communication Styles"                                                 ,"list":null},
{"href":"Socket-Addresses.html#Socket-Addresses"                                             ,"name":"16.3 Socket Addresses"                                                     ,"list":[
{"href":"Address-Formats.html#Address-Formats"                                               ,"name":"16.3.1 Address Formats"                                                    ,"list":null},
{"href":"Setting-Address.html#Setting-Address"                                               ,"name":"16.3.2 Setting the Address of a Socket"                                    ,"list":null},
{"href":"Reading-Address.html#Reading-Address"                                               ,"name":"16.3.3 Reading the Address of a Socket"                                    ,"list":null}]},
{"href":"Interface-Naming.html#Interface-Naming"                                             ,"name":"16.4 Interface Naming"                                                     ,"list":null},
{"href":"Local-Namespace.html#Local-Namespace"                                               ,"name":"16.5 The Local Namespace"                                                  ,"list":[
{"href":"Local-Namespace-Concepts.html#Local-Namespace-Concepts"                             ,"name":"16.5.1 Local Namespace Concepts"                                           ,"list":null},
{"href":"Local-Namespace-Details.html#Local-Namespace-Details"                               ,"name":"16.5.2 Details of Local Namespace"                                         ,"list":null},
{"href":"Local-Socket-Example.html#Local-Socket-Example"                                     ,"name":"16.5.3 Example of Local-Namespace Sockets"                                 ,"list":null}]},
{"href":"Internet-Namespace.html#Internet-Namespace"                                         ,"name":"16.6 The Internet Namespace"                                               ,"list":[
{"href":"Internet-Address-Formats.html#Internet-Address-Formats"                             ,"name":"16.6.1 Internet Socket Address Formats"                                    ,"list":null},
{"href":"Host-Addresses.html#Host-Addresses"                                                 ,"name":"16.6.2 Host Addresses"                                                     ,"list":[
{"href":"Abstract-Host-Addresses.html#Abstract-Host-Addresses"                               ,"name":"16.6.2.1 Internet Host Addresses"                                          ,"list":null},
{"href":"Host-Address-Data-Type.html#Host-Address-Data-Type"                                 ,"name":"16.6.2.2 Host Address Data Type"                                           ,"list":null},
{"href":"Host-Address-Functions.html#Host-Address-Functions"                                 ,"name":"16.6.2.3 Host Address Functions"                                           ,"list":null},
{"href":"Host-Names.html#Host-Names"                                                         ,"name":"16.6.2.4 Host Names"                                                       ,"list":null}]},
{"href":"Ports.html#Ports"                                                                   ,"name":"16.6.3 Internet Ports"                                                     ,"list":null},
{"href":"Services-Database.html#Services-Database"                                           ,"name":"16.6.4 The Services Database"                                              ,"list":null},
{"href":"Byte-Order.html#Byte-Order"                                                         ,"name":"16.6.5 Byte Order Conversion"                                              ,"list":null},
{"href":"Protocols-Database.html#Protocols-Database"                                         ,"name":"16.6.6 Protocols Database"                                                 ,"list":null},
{"href":"Inet-Example.html#Inet-Example"                                                     ,"name":"16.6.7 Internet Socket Example"                                            ,"list":null}]},
{"href":"Misc-Namespaces.html#Misc-Namespaces"                                               ,"name":"16.7 Other Namespaces"                                                     ,"list":null},
{"href":"Open_002fClose-Sockets.html#Open_002fClose-Sockets"                                 ,"name":"16.8 Opening and Closing Sockets"                                          ,"list":[
{"href":"Creating-a-Socket.html#Creating-a-Socket"                                           ,"name":"16.8.1 Creating a Socket"                                                  ,"list":null},
{"href":"Closing-a-Socket.html#Closing-a-Socket"                                             ,"name":"16.8.2 Closing a Socket"                                                   ,"list":null},
{"href":"Socket-Pairs.html#Socket-Pairs"                                                     ,"name":"16.8.3 Socket Pairs"                                                       ,"list":null}]},
{"href":"Connections.html#Connections"                                                       ,"name":"16.9 Using Sockets with Connections"                                       ,"list":[
{"href":"Connecting.html#Connecting"                                                         ,"name":"16.9.1 Making a Connection"                                                ,"list":null},
{"href":"Listening.html#Listening"                                                           ,"name":"16.9.2 Listening for Connections"                                          ,"list":null},
{"href":"Accepting-Connections.html#Accepting-Connections"                                   ,"name":"16.9.3 Accepting Connections"                                              ,"list":null},
{"href":"Who-is-Connected.html#Who-is-Connected"                                             ,"name":"16.9.4 Who is Connected to Me?"                                            ,"list":null},
{"href":"Transferring-Data.html#Transferring-Data"                                           ,"name":"16.9.5 Transferring Data"                                                  ,"list":[
{"href":"Sending-Data.html#Sending-Data"                                                     ,"name":"16.9.5.1 Sending Data"                                                     ,"list":null},
{"href":"Receiving-Data.html#Receiving-Data"                                                 ,"name":"16.9.5.2 Receiving Data"                                                   ,"list":null},
{"href":"Socket-Data-Options.html#Socket-Data-Options"                                       ,"name":"16.9.5.3 Socket Data Options"                                              ,"list":null}]},
{"href":"Byte-Stream-Example.html#Byte-Stream-Example"                                       ,"name":"16.9.6 Byte Stream Socket Example"                                         ,"list":null},
{"href":"Server-Example.html#Server-Example"                                                 ,"name":"16.9.7 Byte Stream Connection Server Example"                              ,"list":null},
{"href":"Out_002dof_002dBand-Data.html#Out_002dof_002dBand-Data"                             ,"name":"16.9.8 Out-of-Band Data"                                                   ,"list":null}]},
{"href":"Datagrams.html#Datagrams"                                                           ,"name":"16.10 Datagram Socket Operations"                                          ,"list":[
{"href":"Sending-Datagrams.html#Sending-Datagrams"                                           ,"name":"16.10.1 Sending Datagrams"                                                 ,"list":null},
{"href":"Receiving-Datagrams.html#Receiving-Datagrams"                                       ,"name":"16.10.2 Receiving Datagrams"                                               ,"list":null},
{"href":"Datagram-Example.html#Datagram-Example"                                             ,"name":"16.10.3 Datagram Socket Example"                                           ,"list":null},
{"href":"Example-Receiver.html#Example-Receiver"                                             ,"name":"16.10.4 Example of Reading Datagrams"                                      ,"list":null}]},
{"href":"Inetd.html#Inetd"                                                                   ,"name":"16.11 The <code>inetd</code> Daemon"                                       ,"list":[
{"href":"Inetd-Servers.html#Inetd-Servers"                                                   ,"name":"16.11.1 <code>inetd</code> Servers"                                        ,"list":null},
{"href":"Configuring-Inetd.html#Configuring-Inetd"                                           ,"name":"16.11.2 Configuring <code>inetd</code>"                                    ,"list":null}]},
{"href":"Socket-Options.html#Socket-Options"                                                 ,"name":"16.12 Socket Options"                                                      ,"list":[
{"href":"Socket-Option-Functions.html#Socket-Option-Functions"                               ,"name":"16.12.1 Socket Option Functions"                                           ,"list":null},
{"href":"Socket_002dLevel-Options.html#Socket_002dLevel-Options"                             ,"name":"16.12.2 Socket-Level Options"                                              ,"list":null}]},
{"href":"Networks-Database.html#Networks-Database"                                           ,"name":"16.13 Networks Database"                                                   ,"list":null}]},
{"href":"Low_002dLevel-Terminal-Interface.html#Low_002dLevel-Terminal-Interface"             ,"name":"17 Low-Level Terminal Interface"                                           ,"list":[
{"href":"Is-It-a-Terminal.html#Is-It-a-Terminal"                                             ,"name":"17.1 Identifying Terminals"                                                ,"list":null},
{"href":"I_002fO-Queues.html#I_002fO-Queues"                                                 ,"name":"17.2 I/O Queues"                                                           ,"list":null},
{"href":"Canonical-or-Not.html#Canonical-or-Not"                                             ,"name":"17.3 Two Styles of Input: Canonical or Not"                                ,"list":null},
{"href":"Terminal-Modes.html#Terminal-Modes"                                                 ,"name":"17.4 Terminal Modes"                                                       ,"list":[
{"href":"Mode-Data-Types.html#Mode-Data-Types"                                               ,"name":"17.4.1 Terminal Mode Data Types"                                           ,"list":null},
{"href":"Mode-Functions.html#Mode-Functions"                                                 ,"name":"17.4.2 Terminal Mode Functions"                                            ,"list":null},
{"href":"Setting-Modes.html#Setting-Modes"                                                   ,"name":"17.4.3 Setting Terminal Modes Properly"                                    ,"list":null},
{"href":"Input-Modes.html#Input-Modes"                                                       ,"name":"17.4.4 Input Modes"                                                        ,"list":null},
{"href":"Output-Modes.html#Output-Modes"                                                     ,"name":"17.4.5 Output Modes"                                                       ,"list":null},
{"href":"Control-Modes.html#Control-Modes"                                                   ,"name":"17.4.6 Control Modes"                                                      ,"list":null},
{"href":"Local-Modes.html#Local-Modes"                                                       ,"name":"17.4.7 Local Modes"                                                        ,"list":null},
{"href":"Line-Speed.html#Line-Speed"                                                         ,"name":"17.4.8 Line Speed"                                                         ,"list":null},
{"href":"Special-Characters.html#Special-Characters"                                         ,"name":"17.4.9 Special Characters"                                                 ,"list":[
{"href":"Editing-Characters.html#Editing-Characters"                                         ,"name":"17.4.9.1 Characters for Input Editing"                                     ,"list":null},
{"href":"Signal-Characters.html#Signal-Characters"                                           ,"name":"17.4.9.2 Characters that Cause Signals"                                    ,"list":null},
{"href":"Start_002fStop-Characters.html#Start_002fStop-Characters"                           ,"name":"17.4.9.3 Special Characters for Flow Control"                              ,"list":null},
{"href":"Other-Special.html#Other-Special"                                                   ,"name":"17.4.9.4 Other Special Characters"                                         ,"list":null}]},
{"href":"Noncanonical-Input.html#Noncanonical-Input"                                         ,"name":"17.4.10 Noncanonical Input"                                                ,"list":null}]},
{"href":"BSD-Terminal-Modes.html#BSD-Terminal-Modes"                                         ,"name":"17.5 BSD Terminal Modes"                                                   ,"list":null},
{"href":"Line-Control.html#Line-Control"                                                     ,"name":"17.6 Line Control Functions"                                               ,"list":null},
{"href":"Noncanon-Example.html#Noncanon-Example"                                             ,"name":"17.7 Noncanonical Mode Example"                                            ,"list":null},
{"href":"Pseudo_002dTerminals.html#Pseudo_002dTerminals"                                     ,"name":"17.8 Pseudo-Terminals"                                                     ,"list":[
{"href":"Allocation.html#Allocation"                                                         ,"name":"17.8.1 Allocating Pseudo-Terminals"                                        ,"list":null},
{"href":"Pseudo_002dTerminal-Pairs.html#Pseudo_002dTerminal-Pairs"                           ,"name":"17.8.2 Opening a Pseudo-Terminal Pair"                                     ,"list":null}]}]},
{"href":"Syslog.html#Syslog"                                                                 ,"name":"18 Syslog"                                                                 ,"list":[
{"href":"Overview-of-Syslog.html#Overview-of-Syslog"                                         ,"name":"18.1 Overview of Syslog"                                                   ,"list":null},
{"href":"Submitting-Syslog-Messages.html#Submitting-Syslog-Messages"                         ,"name":"18.2 Submitting Syslog Messages"                                           ,"list":[
{"href":"openlog.html#openlog"                                                               ,"name":"18.2.1 openlog"                                                            ,"list":null},
{"href":"syslog_003b-vsyslog.html#syslog_003b-vsyslog"                                       ,"name":"18.2.2 syslog, vsyslog"                                                    ,"list":null},
{"href":"closelog.html#closelog"                                                             ,"name":"18.2.3 closelog"                                                           ,"list":null},
{"href":"setlogmask.html#setlogmask"                                                         ,"name":"18.2.4 setlogmask"                                                         ,"list":null},
{"href":"Syslog-Example.html#Syslog-Example"                                                 ,"name":"18.2.5 Syslog Example"                                                     ,"list":null}]}]},
{"href":"Mathematics.html#Mathematics"                                                       ,"name":"19 Mathematics"                                                            ,"list":[
{"href":"Mathematical-Constants.html#Mathematical-Constants"                                 ,"name":"19.1 Predefined Mathematical Constants"                                    ,"list":null},
{"href":"Trig-Functions.html#Trig-Functions"                                                 ,"name":"19.2 Trigonometric Functions"                                              ,"list":null},
{"href":"Inverse-Trig-Functions.html#Inverse-Trig-Functions"                                 ,"name":"19.3 Inverse Trigonometric Functions"                                      ,"list":null},
{"href":"Exponents-and-Logarithms.html#Exponents-and-Logarithms"                             ,"name":"19.4 Exponentiation and Logarithms"                                        ,"list":null},
{"href":"Hyperbolic-Functions.html#Hyperbolic-Functions"                                     ,"name":"19.5 Hyperbolic Functions"                                                 ,"list":null},
{"href":"Special-Functions.html#Special-Functions"                                           ,"name":"19.6 Special Functions"                                                    ,"list":null},
{"href":"Errors-in-Math-Functions.html#Errors-in-Math-Functions"                             ,"name":"19.7 Known Maximum Errors in Math Functions"                               ,"list":null},
{"href":"Pseudo_002dRandom-Numbers.html#Pseudo_002dRandom-Numbers"                           ,"name":"19.8 Pseudo-Random Numbers"                                                ,"list":[
{"href":"ISO-Random.html#ISO-Random"                                                         ,"name":"19.8.1 ISO C Random Number Functions"                                      ,"list":null},
{"href":"BSD-Random.html#BSD-Random"                                                         ,"name":"19.8.2 BSD Random Number Functions"                                        ,"list":null},
{"href":"SVID-Random.html#SVID-Random"                                                       ,"name":"19.8.3 SVID Random Number Function"                                        ,"list":null}]},
{"href":"FP-Function-Optimizations.html#FP-Function-Optimizations"                           ,"name":"19.9 Is Fast Code or Small Code preferred?"                                ,"list":null}]},
{"href":"Arithmetic.html#Arithmetic"                                                         ,"name":"20 Arithmetic Functions"                                                   ,"list":[
{"href":"Integers.html#Integers"                                                             ,"name":"20.1 Integers"                                                             ,"list":null},
{"href":"Integer-Division.html#Integer-Division"                                             ,"name":"20.2 Integer Division"                                                     ,"list":null},
{"href":"Floating-Point-Numbers.html#Floating-Point-Numbers"                                 ,"name":"20.3 Floating Point Numbers"                                               ,"list":null},
{"href":"Floating-Point-Classes.html#Floating-Point-Classes"                                 ,"name":"20.4 Floating-Point Number Classification Functions"                       ,"list":null},
{"href":"Floating-Point-Errors.html#Floating-Point-Errors"                                   ,"name":"20.5 Errors in Floating-Point Calculations"                                ,"list":[
{"href":"FP-Exceptions.html#FP-Exceptions"                                                   ,"name":"20.5.1 FP Exceptions"                                                      ,"list":null},
{"href":"Infinity-and-NaN.html#Infinity-and-NaN"                                             ,"name":"20.5.2 Infinity and NaN"                                                   ,"list":null},
{"href":"Status-bit-operations.html#Status-bit-operations"                                   ,"name":"20.5.3 Examining the FPU status word"                                      ,"list":null},
{"href":"Math-Error-Reporting.html#Math-Error-Reporting"                                     ,"name":"20.5.4 Error Reporting by Mathematical Functions"                          ,"list":null}]},
{"href":"Rounding.html#Rounding"                                                             ,"name":"20.6 Rounding Modes"                                                       ,"list":null},
{"href":"Control-Functions.html#Control-Functions"                                           ,"name":"20.7 Floating-Point Control Functions"                                     ,"list":null},
{"href":"Arithmetic-Functions.html#Arithmetic-Functions"                                     ,"name":"20.8 Arithmetic Functions"                                                 ,"list":[
{"href":"Absolute-Value.html#Absolute-Value"                                                 ,"name":"20.8.1 Absolute Value"                                                     ,"list":null},
{"href":"Normalization-Functions.html#Normalization-Functions"                               ,"name":"20.8.2 Normalization Functions"                                            ,"list":null},
{"href":"Rounding-Functions.html#Rounding-Functions"                                         ,"name":"20.8.3 Rounding Functions"                                                 ,"list":null},
{"href":"Remainder-Functions.html#Remainder-Functions"                                       ,"name":"20.8.4 Remainder Functions"                                                ,"list":null},
{"href":"FP-Bit-Twiddling.html#FP-Bit-Twiddling"                                             ,"name":"20.8.5 Setting and modifying single bits of FP values"                     ,"list":null},
{"href":"FP-Comparison-Functions.html#FP-Comparison-Functions"                               ,"name":"20.8.6 Floating-Point Comparison Functions"                                ,"list":null},
{"href":"Misc-FP-Arithmetic.html#Misc-FP-Arithmetic"                                         ,"name":"20.8.7 Miscellaneous FP arithmetic functions"                              ,"list":null}]},
{"href":"Complex-Numbers.html#Complex-Numbers"                                               ,"name":"20.9 Complex Numbers"                                                      ,"list":null},
{"href":"Operations-on-Complex.html#Operations-on-Complex"                                   ,"name":"20.10 Projections, Conjugates, and Decomposing of Complex Numbers"         ,"list":null},
{"href":"Parsing-of-Numbers.html#Parsing-of-Numbers"                                         ,"name":"20.11 Parsing of Numbers"                                                  ,"list":[
{"href":"Parsing-of-Integers.html#Parsing-of-Integers"                                       ,"name":"20.11.1 Parsing of Integers"                                               ,"list":null},
{"href":"Parsing-of-Floats.html#Parsing-of-Floats"                                           ,"name":"20.11.2 Parsing of Floats"                                                 ,"list":null}]},
{"href":"System-V-Number-Conversion.html#System-V-Number-Conversion"                         ,"name":"20.12 Old-fashioned System V number-to-string functions"                   ,"list":null}]},
{"href":"Date-and-Time.html#Date-and-Time"                                                   ,"name":"21 Date and Time"                                                          ,"list":[
{"href":"Time-Basics.html#Time-Basics"                                                       ,"name":"21.1 Time Basics"                                                          ,"list":null},
{"href":"Elapsed-Time.html#Elapsed-Time"                                                     ,"name":"21.2 Elapsed Time"                                                         ,"list":null},
{"href":"Processor-And-CPU-Time.html#Processor-And-CPU-Time"                                 ,"name":"21.3 Processor And CPU Time"                                               ,"list":[
{"href":"CPU-Time.html#CPU-Time"                                                             ,"name":"21.3.1 CPU Time Inquiry"                                                   ,"list":null},
{"href":"Processor-Time.html#Processor-Time"                                                 ,"name":"21.3.2 Processor Time Inquiry"                                             ,"list":null}]},
{"href":"Calendar-Time.html#Calendar-Time"                                                   ,"name":"21.4 Calendar Time"                                                        ,"list":[
{"href":"Simple-Calendar-Time.html#Simple-Calendar-Time"                                     ,"name":"21.4.1 Simple Calendar Time"                                               ,"list":null},
{"href":"High_002dResolution-Calendar.html#High_002dResolution-Calendar"                     ,"name":"21.4.2 High-Resolution Calendar"                                           ,"list":null},
{"href":"Broken_002ddown-Time.html#Broken_002ddown-Time"                                     ,"name":"21.4.3 Broken-down Time"                                                   ,"list":null},
{"href":"High-Accuracy-Clock.html#High-Accuracy-Clock"                                       ,"name":"21.4.4 High Accuracy Clock"                                                ,"list":null},
{"href":"Formatting-Calendar-Time.html#Formatting-Calendar-Time"                             ,"name":"21.4.5 Formatting Calendar Time"                                           ,"list":null},
{"href":"Parsing-Date-and-Time.html#Parsing-Date-and-Time"                                   ,"name":"21.4.6 Convert textual time and date information back"                     ,"list":[
{"href":"Low_002dLevel-Time-String-Parsing.html#Low_002dLevel-Time-String-Parsing"           ,"name":"21.4.6.1 Interpret string according to given format"                       ,"list":null},
{"href":"General-Time-String-Parsing.html#General-Time-String-Parsing"                       ,"name":"21.4.6.2 A More User-friendly Way to Parse Times and Dates"                ,"list":null}]},
{"href":"TZ-Variable.html#TZ-Variable"                                                       ,"name":"21.4.7 Specifying the Time Zone with <code>TZ</code>"                      ,"list":null},
{"href":"Time-Zone-Functions.html#Time-Zone-Functions"                                       ,"name":"21.4.8 Functions and Variables for Time Zones"                             ,"list":null},
{"href":"Time-Functions-Example.html#Time-Functions-Example"                                 ,"name":"21.4.9 Time Functions Example"                                             ,"list":null}]},
{"href":"Setting-an-Alarm.html#Setting-an-Alarm"                                             ,"name":"21.5 Setting an Alarm"                                                     ,"list":null},
{"href":"Sleeping.html#Sleeping"                                                             ,"name":"21.6 Sleeping"                                                             ,"list":null}]},
{"href":"Resource-Usage-And-Limitation.html#Resource-Usage-And-Limitation"                   ,"name":"22 Resource Usage And Limitation"                                          ,"list":[
{"href":"Resource-Usage.html#Resource-Usage"                                                 ,"name":"22.1 Resource Usage"                                                       ,"list":null},
{"href":"Limits-on-Resources.html#Limits-on-Resources"                                       ,"name":"22.2 Limiting Resource Usage"                                              ,"list":null},
{"href":"Priority.html#Priority"                                                             ,"name":"22.3 Process CPU Priority And Scheduling"                                  ,"list":[
{"href":"Absolute-Priority.html#Absolute-Priority"                                           ,"name":"22.3.1 Absolute Priority"                                                  ,"list":[
{"href":"Absolute-Priority.html#Using-Absolute-Priority"                                     ,"name":"22.3.1.1 Using Absolute Priority"                                          ,"list":null}]},
{"href":"Realtime-Scheduling.html#Realtime-Scheduling"                                       ,"name":"22.3.2 Realtime Scheduling"                                                ,"list":null},
{"href":"Basic-Scheduling-Functions.html#Basic-Scheduling-Functions"                         ,"name":"22.3.3 Basic Scheduling Functions"                                         ,"list":null},
{"href":"Traditional-Scheduling.html#Traditional-Scheduling"                                 ,"name":"22.3.4 Traditional Scheduling"                                             ,"list":[
{"href":"Traditional-Scheduling-Intro.html#Traditional-Scheduling-Intro"                     ,"name":"22.3.4.1 Introduction To Traditional Scheduling"                           ,"list":null},
{"href":"Traditional-Scheduling-Functions.html#Traditional-Scheduling-Functions"             ,"name":"22.3.4.2 Functions For Traditional Scheduling"                             ,"list":null}]},
{"href":"CPU-Affinity.html#CPU-Affinity"                                                     ,"name":"22.3.5 Limiting execution to certain CPUs"                                 ,"list":null}]},
{"href":"Memory-Resources.html#Memory-Resources"                                             ,"name":"22.4 Querying memory available resources"                                  ,"list":[
{"href":"Memory-Subsystem.html#Memory-Subsystem"                                             ,"name":"22.4.1 Overview about traditional Unix memory handling"                    ,"list":null},
{"href":"Query-Memory-Parameters.html#Query-Memory-Parameters"                               ,"name":"22.4.2 How to get information about the memory subsystem?"                 ,"list":null}]},
{"href":"Processor-Resources.html#Processor-Resources"                                       ,"name":"22.5 Learn about the processors available"                                 ,"list":null}]},
{"href":"Non_002dLocal-Exits.html#Non_002dLocal-Exits"                                       ,"name":"23 Non-Local Exits"                                                        ,"list":[
{"href":"Non_002dLocal-Intro.html#Non_002dLocal-Intro"                                       ,"name":"23.1 Introduction to Non-Local Exits"                                      ,"list":null},
{"href":"Non_002dLocal-Details.html#Non_002dLocal-Details"                                   ,"name":"23.2 Details of Non-Local Exits"                                           ,"list":null},
{"href":"Non_002dLocal-Exits-and-Signals.html#Non_002dLocal-Exits-and-Signals"               ,"name":"23.3 Non-Local Exits and Signals"                                          ,"list":null},
{"href":"System-V-contexts.html#System-V-contexts"                                           ,"name":"23.4 Complete Context Control"                                             ,"list":null}]},
{"href":"Signal-Handling.html#Signal-Handling"                                               ,"name":"24 Signal Handling"                                                        ,"list":[
{"href":"Concepts-of-Signals.html#Concepts-of-Signals"                                       ,"name":"24.1 Basic Concepts of Signals"                                            ,"list":[
{"href":"Kinds-of-Signals.html#Kinds-of-Signals"                                             ,"name":"24.1.1 Some Kinds of Signals"                                              ,"list":null},
{"href":"Signal-Generation.html#Signal-Generation"                                           ,"name":"24.1.2 Concepts of Signal Generation"                                      ,"list":null},
{"href":"Delivery-of-Signal.html#Delivery-of-Signal"                                         ,"name":"24.1.3 How Signals Are Delivered"                                          ,"list":null}]},
{"href":"Standard-Signals.html#Standard-Signals"                                             ,"name":"24.2 Standard Signals"                                                     ,"list":[
{"href":"Program-Error-Signals.html#Program-Error-Signals"                                   ,"name":"24.2.1 Program Error Signals"                                              ,"list":null},
{"href":"Termination-Signals.html#Termination-Signals"                                       ,"name":"24.2.2 Termination Signals"                                                ,"list":null},
{"href":"Alarm-Signals.html#Alarm-Signals"                                                   ,"name":"24.2.3 Alarm Signals"                                                      ,"list":null},
{"href":"Asynchronous-I_002fO-Signals.html#Asynchronous-I_002fO-Signals"                     ,"name":"24.2.4 Asynchronous I/O Signals"                                           ,"list":null},
{"href":"Job-Control-Signals.html#Job-Control-Signals"                                       ,"name":"24.2.5 Job Control Signals"                                                ,"list":null},
{"href":"Operation-Error-Signals.html#Operation-Error-Signals"                               ,"name":"24.2.6 Operation Error Signals"                                            ,"list":null},
{"href":"Miscellaneous-Signals.html#Miscellaneous-Signals"                                   ,"name":"24.2.7 Miscellaneous Signals"                                              ,"list":null},
{"href":"Signal-Messages.html#Signal-Messages"                                               ,"name":"24.2.8 Signal Messages"                                                    ,"list":null}]},
{"href":"Signal-Actions.html#Signal-Actions"                                                 ,"name":"24.3 Specifying Signal Actions"                                            ,"list":[
{"href":"Basic-Signal-Handling.html#Basic-Signal-Handling"                                   ,"name":"24.3.1 Basic Signal Handling"                                              ,"list":null},
{"href":"Advanced-Signal-Handling.html#Advanced-Signal-Handling"                             ,"name":"24.3.2 Advanced Signal Handling"                                           ,"list":null},
{"href":"Signal-and-Sigaction.html#Signal-and-Sigaction"                                     ,"name":"24.3.3 Interaction of <code>signal</code> and <code>sigaction</code>"      ,"list":null},
{"href":"Sigaction-Function-Example.html#Sigaction-Function-Example"                         ,"name":"24.3.4 <code>sigaction</code> Function Example"                            ,"list":null},
{"href":"Flags-for-Sigaction.html#Flags-for-Sigaction"                                       ,"name":"24.3.5 Flags for <code>sigaction</code>"                                   ,"list":null},
{"href":"Initial-Signal-Actions.html#Initial-Signal-Actions"                                 ,"name":"24.3.6 Initial Signal Actions"                                             ,"list":null}]},
{"href":"Defining-Handlers.html#Defining-Handlers"                                           ,"name":"24.4 Defining Signal Handlers"                                             ,"list":[
{"href":"Handler-Returns.html#Handler-Returns"                                               ,"name":"24.4.1 Signal Handlers that Return"                                        ,"list":null},
{"href":"Termination-in-Handler.html#Termination-in-Handler"                                 ,"name":"24.4.2 Handlers That Terminate the Process"                                ,"list":null},
{"href":"Longjmp-in-Handler.html#Longjmp-in-Handler"                                         ,"name":"24.4.3 Nonlocal Control Transfer in Handlers"                              ,"list":null},
{"href":"Signals-in-Handler.html#Signals-in-Handler"                                         ,"name":"24.4.4 Signals Arriving While a Handler Runs"                              ,"list":null},
{"href":"Merged-Signals.html#Merged-Signals"                                                 ,"name":"24.4.5 Signals Close Together Merge into One"                              ,"list":null},
{"href":"Nonreentrancy.html#Nonreentrancy"                                                   ,"name":"24.4.6 Signal Handling and Nonreentrant Functions"                         ,"list":null},
{"href":"Atomic-Data-Access.html#Atomic-Data-Access"                                         ,"name":"24.4.7 Atomic Data Access and Signal Handling"                             ,"list":[
{"href":"Non_002datomic-Example.html#Non_002datomic-Example"                                 ,"name":"24.4.7.1 Problems with Non-Atomic Access"                                  ,"list":null},
{"href":"Atomic-Types.html#Atomic-Types"                                                     ,"name":"24.4.7.2 Atomic Types"                                                     ,"list":null},
{"href":"Atomic-Usage.html#Atomic-Usage"                                                     ,"name":"24.4.7.3 Atomic Usage Patterns"                                            ,"list":null}]}]},
{"href":"Interrupted-Primitives.html#Interrupted-Primitives"                                 ,"name":"24.5 Primitives Interrupted by Signals"                                    ,"list":null},
{"href":"Generating-Signals.html#Generating-Signals"                                         ,"name":"24.6 Generating Signals"                                                   ,"list":[
{"href":"Signaling-Yourself.html#Signaling-Yourself"                                         ,"name":"24.6.1 Signaling Yourself"                                                 ,"list":null},
{"href":"Signaling-Another-Process.html#Signaling-Another-Process"                           ,"name":"24.6.2 Signaling Another Process"                                          ,"list":null},
{"href":"Permission-for-kill.html#Permission-for-kill"                                       ,"name":"24.6.3 Permission for using <code>kill</code>"                             ,"list":null},
{"href":"Kill-Example.html#Kill-Example"                                                     ,"name":"24.6.4 Using <code>kill</code> for Communication"                          ,"list":null}]},
{"href":"Blocking-Signals.html#Blocking-Signals"                                             ,"name":"24.7 Blocking Signals"                                                     ,"list":[
{"href":"Why-Block.html#Why-Block"                                                           ,"name":"24.7.1 Why Blocking Signals is Useful"                                     ,"list":null},
{"href":"Signal-Sets.html#Signal-Sets"                                                       ,"name":"24.7.2 Signal Sets"                                                        ,"list":null},
{"href":"Process-Signal-Mask.html#Process-Signal-Mask"                                       ,"name":"24.7.3 Process Signal Mask"                                                ,"list":null},
{"href":"Testing-for-Delivery.html#Testing-for-Delivery"                                     ,"name":"24.7.4 Blocking to Test for Delivery of a Signal"                          ,"list":null},
{"href":"Blocking-for-Handler.html#Blocking-for-Handler"                                     ,"name":"24.7.5 Blocking Signals for a Handler"                                     ,"list":null},
{"href":"Checking-for-Pending-Signals.html#Checking-for-Pending-Signals"                     ,"name":"24.7.6 Checking for Pending Signals"                                       ,"list":null},
{"href":"Remembering-a-Signal.html#Remembering-a-Signal"                                     ,"name":"24.7.7 Remembering a Signal to Act On Later"                               ,"list":null}]},
{"href":"Waiting-for-a-Signal.html#Waiting-for-a-Signal"                                     ,"name":"24.8 Waiting for a Signal"                                                 ,"list":[
{"href":"Using-Pause.html#Using-Pause"                                                       ,"name":"24.8.1 Using <code>pause</code>"                                           ,"list":null},
{"href":"Pause-Problems.html#Pause-Problems"                                                 ,"name":"24.8.2 Problems with <code>pause</code>"                                   ,"list":null},
{"href":"Sigsuspend.html#Sigsuspend"                                                         ,"name":"24.8.3 Using <code>sigsuspend</code>"                                      ,"list":null}]},
{"href":"Signal-Stack.html#Signal-Stack"                                                     ,"name":"24.9 Using a Separate Signal Stack"                                        ,"list":null},
{"href":"BSD-Signal-Handling.html#BSD-Signal-Handling"                                       ,"name":"24.10 BSD Signal Handling"                                                 ,"list":null}]},
{"href":"Program-Basics.html#Program-Basics"                                                 ,"name":"25 The Basic Program/System Interface"                                     ,"list":[
{"href":"Program-Arguments.html#Program-Arguments"                                           ,"name":"25.1 Program Arguments"                                                    ,"list":[
{"href":"Argument-Syntax.html#Argument-Syntax"                                               ,"name":"25.1.1 Program Argument Syntax Conventions"                                ,"list":null},
{"href":"Parsing-Program-Arguments.html#Parsing-Program-Arguments"                           ,"name":"25.1.2 Parsing Program Arguments"                                          ,"list":null}]},
{"href":"Getopt.html#Getopt"                                                                 ,"name":"25.2 Parsing program options using <code>getopt</code>"                    ,"list":[
{"href":"Using-Getopt.html#Using-Getopt"                                                     ,"name":"25.2.1 Using the <code>getopt</code> function"                             ,"list":null},
{"href":"Example-of-Getopt.html#Example-of-Getopt"                                           ,"name":"25.2.2 Example of Parsing Arguments with <code>getopt</code>"              ,"list":null},
{"href":"Getopt-Long-Options.html#Getopt-Long-Options"                                       ,"name":"25.2.3 Parsing Long Options with <code>getopt_long</code>"                 ,"list":null},
{"href":"Getopt-Long-Option-Example.html#Getopt-Long-Option-Example"                         ,"name":"25.2.4 Example of Parsing Long Options with <code>getopt_long</code>"      ,"list":null}]},
{"href":"Argp.html#Argp"                                                                     ,"name":"25.3 Parsing Program Options with Argp"                                    ,"list":[
{"href":"Argp.html#The-argp_005fparse-Function"                                              ,"name":"25.3.1 The <code>argp_parse</code> Function"                               ,"list":null},
{"href":"Argp-Global-Variables.html#Argp-Global-Variables"                                   ,"name":"25.3.2 Argp Global Variables"                                              ,"list":null},
{"href":"Argp-Parsers.html#Argp-Parsers"                                                     ,"name":"25.3.3 Specifying Argp Parsers"                                            ,"list":null},
{"href":"Argp-Option-Vectors.html#Argp-Option-Vectors"                                       ,"name":"25.3.4 Specifying Options in an Argp Parser"                               ,"list":[
{"href":"Argp-Option-Flags.html#Argp-Option-Flags"                                           ,"name":"25.3.4.1 Flags for Argp Options"                                           ,"list":null}]},
{"href":"Argp-Parser-Functions.html#Argp-Parser-Functions"                                   ,"name":"25.3.5 Argp Parser Functions"                                              ,"list":[
{"href":"Argp-Special-Keys.html#Argp-Special-Keys"                                           ,"name":"25.3.5.1 Special Keys for Argp Parser Functions"                           ,"list":null},
{"href":"Argp-Parsing-State.html#Argp-Parsing-State"                                         ,"name":"25.3.5.2 Argp Parsing State"                                               ,"list":null},
{"href":"Argp-Helper-Functions.html#Argp-Helper-Functions"                                   ,"name":"25.3.5.3 Functions For Use in Argp Parsers"                                ,"list":null}]},
{"href":"Argp-Children.html#Argp-Children"                                                   ,"name":"25.3.6 Combining Multiple Argp Parsers"                                    ,"list":null},
{"href":"Argp-Flags.html#Argp-Flags"                                                         ,"name":"25.3.7 Flags for <code>argp_parse</code>"                                  ,"list":null},
{"href":"Argp-Help-Filtering.html#Argp-Help-Filtering"                                       ,"name":"25.3.8 Customizing Argp Help Output"                                       ,"list":[
{"href":"Argp-Help-Filter-Keys.html#Argp-Help-Filter-Keys"                                   ,"name":"25.3.8.1 Special Keys for Argp Help Filter Functions"                      ,"list":null}]},
{"href":"Argp-Help.html#Argp-Help"                                                           ,"name":"25.3.9 The <code>argp_help</code> Function"                                ,"list":null},
{"href":"Argp-Help-Flags.html#Argp-Help-Flags"                                               ,"name":"25.3.10 Flags for the <code>argp_help</code> Function"                     ,"list":null},
{"href":"Argp-Examples.html#Argp-Examples"                                                   ,"name":"25.3.11 Argp Examples"                                                     ,"list":[
{"href":"Argp-Example-1.html#Argp-Example-1"                                                 ,"name":"25.3.11.1 A Minimal Program Using Argp"                                    ,"list":null},
{"href":"Argp-Example-2.html#Argp-Example-2"                                                 ,"name":"25.3.11.2 A Program Using Argp with Only Default Options"                  ,"list":null},
{"href":"Argp-Example-3.html#Argp-Example-3"                                                 ,"name":"25.3.11.3 A Program Using Argp with User Options"                          ,"list":null},
{"href":"Argp-Example-4.html#Argp-Example-4"                                                 ,"name":"25.3.11.4 A Program Using Multiple Combined Argp Parsers"                  ,"list":null}]},
{"href":"Argp-User-Customization.html#Argp-User-Customization"                               ,"name":"25.3.12 Argp User Customization"                                           ,"list":[
{"href":"Suboptions.html#Suboptions"                                                         ,"name":"25.3.12.1 Parsing of Suboptions"                                           ,"list":null}]},
{"href":"Suboptions-Example.html#Suboptions-Example"                                         ,"name":"25.3.13 Parsing of Suboptions Example"                                     ,"list":null}]},
{"href":"Environment-Variables.html#Environment-Variables"                                   ,"name":"25.4 Environment Variables"                                                ,"list":[
{"href":"Environment-Access.html#Environment-Access"                                         ,"name":"25.4.1 Environment Access"                                                 ,"list":null},
{"href":"Standard-Environment.html#Standard-Environment"                                     ,"name":"25.4.2 Standard Environment Variables"                                     ,"list":null}]},
{"href":"Auxiliary-Vector.html#Auxiliary-Vector"                                             ,"name":"25.5 Auxiliary Vector"                                                     ,"list":[
{"href":"Auxiliary-Vector.html#Definition-of-getauxval"                                      ,"name":"25.5.1 Definition of <code>getauxval</code>"                               ,"list":null}]},
{"href":"System-Calls.html#System-Calls"                                                     ,"name":"25.6 System Calls"                                                         ,"list":null},
{"href":"Program-Termination.html#Program-Termination"                                       ,"name":"25.7 Program Termination"                                                  ,"list":[
{"href":"Normal-Termination.html#Normal-Termination"                                         ,"name":"25.7.1 Normal Termination"                                                 ,"list":null},
{"href":"Exit-Status.html#Exit-Status"                                                       ,"name":"25.7.2 Exit Status"                                                        ,"list":null},
{"href":"Cleanups-on-Exit.html#Cleanups-on-Exit"                                             ,"name":"25.7.3 Cleanups on Exit"                                                   ,"list":null},
{"href":"Aborting-a-Program.html#Aborting-a-Program"                                         ,"name":"25.7.4 Aborting a Program"                                                 ,"list":null},
{"href":"Termination-Internals.html#Termination-Internals"                                   ,"name":"25.7.5 Termination Internals"                                              ,"list":null}]}]},
{"href":"Processes.html#Processes"                                                           ,"name":"26 Processes"                                                              ,"list":[
{"href":"Running-a-Command.html#Running-a-Command"                                           ,"name":"26.1 Running a Command"                                                    ,"list":null},
{"href":"Process-Creation-Concepts.html#Process-Creation-Concepts"                           ,"name":"26.2 Process Creation Concepts"                                            ,"list":null},
{"href":"Process-Identification.html#Process-Identification"                                 ,"name":"26.3 Process Identification"                                               ,"list":null},
{"href":"Creating-a-Process.html#Creating-a-Process"                                         ,"name":"26.4 Creating a Process"                                                   ,"list":null},
{"href":"Executing-a-File.html#Executing-a-File"                                             ,"name":"26.5 Executing a File"                                                     ,"list":null},
{"href":"Process-Completion.html#Process-Completion"                                         ,"name":"26.6 Process Completion"                                                   ,"list":null},
{"href":"Process-Completion-Status.html#Process-Completion-Status"                           ,"name":"26.7 Process Completion Status"                                            ,"list":null},
{"href":"BSD-Wait-Functions.html#BSD-Wait-Functions"                                         ,"name":"26.8 BSD Process Wait Functions"                                           ,"list":null},
{"href":"Process-Creation-Example.html#Process-Creation-Example"                             ,"name":"26.9 Process Creation Example"                                             ,"list":null}]},
{"href":"Inter_002dProcess-Communication.html#Inter_002dProcess-Communication"               ,"name":"27 Inter-Process Communication"                                            ,"list":[
{"href":"Semaphores.html#Semaphores"                                                         ,"name":"27.1 Semaphores"                                                           ,"list":[
{"href":"Semaphores.html#System-V-Semaphores"                                                ,"name":"27.1.1 System V Semaphores"                                                ,"list":null},
{"href":"Semaphores.html#POSIX-Semaphores"                                                   ,"name":"27.1.2 POSIX Semaphores"                                                   ,"list":null}]}]},
{"href":"Job-Control.html#Job-Control"                                                       ,"name":"28 Job Control"                                                            ,"list":[
{"href":"Concepts-of-Job-Control.html#Concepts-of-Job-Control"                               ,"name":"28.1 Concepts of Job Control"                                              ,"list":null},
{"href":"Job-Control-is-Optional.html#Job-Control-is-Optional"                               ,"name":"28.2 Job Control is Optional"                                              ,"list":null},
{"href":"Controlling-Terminal.html#Controlling-Terminal"                                     ,"name":"28.3 Controlling Terminal of a Process"                                    ,"list":null},
{"href":"Access-to-the-Terminal.html#Access-to-the-Terminal"                                 ,"name":"28.4 Access to the Controlling Terminal"                                   ,"list":null},
{"href":"Orphaned-Process-Groups.html#Orphaned-Process-Groups"                               ,"name":"28.5 Orphaned Process Groups"                                              ,"list":null},
{"href":"Implementing-a-Shell.html#Implementing-a-Shell"                                     ,"name":"28.6 Implementing a Job Control Shell"                                     ,"list":[
{"href":"Data-Structures.html#Data-Structures"                                               ,"name":"28.6.1 Data Structures for the Shell"                                      ,"list":null},
{"href":"Initializing-the-Shell.html#Initializing-the-Shell"                                 ,"name":"28.6.2 Initializing the Shell"                                             ,"list":null},
{"href":"Launching-Jobs.html#Launching-Jobs"                                                 ,"name":"28.6.3 Launching Jobs"                                                     ,"list":null},
{"href":"Foreground-and-Background.html#Foreground-and-Background"                           ,"name":"28.6.4 Foreground and Background"                                          ,"list":null},
{"href":"Stopped-and-Terminated-Jobs.html#Stopped-and-Terminated-Jobs"                       ,"name":"28.6.5 Stopped and Terminated Jobs"                                        ,"list":null},
{"href":"Continuing-Stopped-Jobs.html#Continuing-Stopped-Jobs"                               ,"name":"28.6.6 Continuing Stopped Jobs"                                            ,"list":null},
{"href":"Missing-Pieces.html#Missing-Pieces"                                                 ,"name":"28.6.7 The Missing Pieces"                                                 ,"list":null}]},
{"href":"Functions-for-Job-Control.html#Functions-for-Job-Control"                           ,"name":"28.7 Functions for Job Control"                                            ,"list":[
{"href":"Identifying-the-Terminal.html#Identifying-the-Terminal"                             ,"name":"28.7.1 Identifying the Controlling Terminal"                               ,"list":null},
{"href":"Process-Group-Functions.html#Process-Group-Functions"                               ,"name":"28.7.2 Process Group Functions"                                            ,"list":null},
{"href":"Terminal-Access-Functions.html#Terminal-Access-Functions"                           ,"name":"28.7.3 Functions for Controlling Terminal Access"                          ,"list":null}]}]},
{"href":"Name-Service-Switch.html#Name-Service-Switch"                                       ,"name":"29 System Databases and Name Service Switch"                               ,"list":[
{"href":"NSS-Basics.html#NSS-Basics"                                                         ,"name":"29.1 NSS Basics"                                                           ,"list":null},
{"href":"NSS-Configuration-File.html#NSS-Configuration-File"                                 ,"name":"29.2 The NSS Configuration File"                                           ,"list":[
{"href":"Services-in-the-NSS-configuration.html#Services-in-the-NSS-configuration"           ,"name":"29.2.1 Services in the NSS configuration File"                             ,"list":null},
{"href":"Actions-in-the-NSS-configuration.html#Actions-in-the-NSS-configuration"             ,"name":"29.2.2 Actions in the NSS configuration"                                   ,"list":null},
{"href":"Notes-on-NSS-Configuration-File.html#Notes-on-NSS-Configuration-File"               ,"name":"29.2.3 Notes on the NSS Configuration File"                                ,"list":null}]},
{"href":"NSS-Module-Internals.html#NSS-Module-Internals"                                     ,"name":"29.3 NSS Module Internals"                                                 ,"list":[
{"href":"NSS-Module-Names.html#NSS-Module-Names"                                             ,"name":"29.3.1 The Naming Scheme of the NSS Modules"                               ,"list":null},
{"href":"NSS-Modules-Interface.html#NSS-Modules-Interface"                                   ,"name":"29.3.2 The Interface of the Function in NSS Modules"                       ,"list":null}]},
{"href":"Extending-NSS.html#Extending-NSS"                                                   ,"name":"29.4 Extending NSS"                                                        ,"list":[
{"href":"Adding-another-Service-to-NSS.html#Adding-another-Service-to-NSS"                   ,"name":"29.4.1 Adding another Service to NSS"                                      ,"list":null},
{"href":"NSS-Module-Function-Internals.html#NSS-Module-Function-Internals"                   ,"name":"29.4.2 Internals of the NSS Module Functions"                              ,"list":null}]}]},
{"href":"Users-and-Groups.html#Users-and-Groups"                                             ,"name":"30 Users and Groups"                                                       ,"list":[
{"href":"User-and-Group-IDs.html#User-and-Group-IDs"                                         ,"name":"30.1 User and Group IDs"                                                   ,"list":null},
{"href":"Process-Persona.html#Process-Persona"                                               ,"name":"30.2 The Persona of a Process"                                             ,"list":null},
{"href":"Why-Change-Persona.html#Why-Change-Persona"                                         ,"name":"30.3 Why Change the Persona of a Process?"                                 ,"list":null},
{"href":"How-Change-Persona.html#How-Change-Persona"                                         ,"name":"30.4 How an Application Can Change Persona"                                ,"list":null},
{"href":"Reading-Persona.html#Reading-Persona"                                               ,"name":"30.5 Reading the Persona of a Process"                                     ,"list":null},
{"href":"Setting-User-ID.html#Setting-User-ID"                                               ,"name":"30.6 Setting the User ID"                                                  ,"list":null},
{"href":"Setting-Groups.html#Setting-Groups"                                                 ,"name":"30.7 Setting the Group IDs"                                                ,"list":null},
{"href":"Enable_002fDisable-Setuid.html#Enable_002fDisable-Setuid"                           ,"name":"30.8 Enabling and Disabling Setuid Access"                                 ,"list":null},
{"href":"Setuid-Program-Example.html#Setuid-Program-Example"                                 ,"name":"30.9 Setuid Program Example"                                               ,"list":null},
{"href":"Tips-for-Setuid.html#Tips-for-Setuid"                                               ,"name":"30.10 Tips for Writing Setuid Programs"                                    ,"list":null},
{"href":"Who-Logged-In.html#Who-Logged-In"                                                   ,"name":"30.11 Identifying Who Logged In"                                           ,"list":null},
{"href":"User-Accounting-Database.html#User-Accounting-Database"                             ,"name":"30.12 The User Accounting Database"                                        ,"list":[
{"href":"Manipulating-the-Database.html#Manipulating-the-Database"                           ,"name":"30.12.1 Manipulating the User Accounting Database"                         ,"list":null},
{"href":"XPG-Functions.html#XPG-Functions"                                                   ,"name":"30.12.2 XPG User Accounting Database Functions"                            ,"list":null},
{"href":"Logging-In-and-Out.html#Logging-In-and-Out"                                         ,"name":"30.12.3 Logging In and Out"                                                ,"list":null}]},
{"href":"User-Database.html#User-Database"                                                   ,"name":"30.13 User Database"                                                       ,"list":[
{"href":"User-Data-Structure.html#User-Data-Structure"                                       ,"name":"30.13.1 The Data Structure that Describes a User"                          ,"list":null},
{"href":"Lookup-User.html#Lookup-User"                                                       ,"name":"30.13.2 Looking Up One User"                                               ,"list":null},
{"href":"Scanning-All-Users.html#Scanning-All-Users"                                         ,"name":"30.13.3 Scanning the List of All Users"                                    ,"list":null},
{"href":"Writing-a-User-Entry.html#Writing-a-User-Entry"                                     ,"name":"30.13.4 Writing a User Entry"                                              ,"list":null}]},
{"href":"Group-Database.html#Group-Database"                                                 ,"name":"30.14 Group Database"                                                      ,"list":[
{"href":"Group-Data-Structure.html#Group-Data-Structure"                                     ,"name":"30.14.1 The Data Structure for a Group"                                    ,"list":null},
{"href":"Lookup-Group.html#Lookup-Group"                                                     ,"name":"30.14.2 Looking Up One Group"                                              ,"list":null},
{"href":"Scanning-All-Groups.html#Scanning-All-Groups"                                       ,"name":"30.14.3 Scanning the List of All Groups"                                   ,"list":null}]},
{"href":"Database-Example.html#Database-Example"                                             ,"name":"30.15 User and Group Database Example"                                     ,"list":null},
{"href":"Netgroup-Database.html#Netgroup-Database"                                           ,"name":"30.16 Netgroup Database"                                                   ,"list":[
{"href":"Netgroup-Data.html#Netgroup-Data"                                                   ,"name":"30.16.1 Netgroup Data"                                                     ,"list":null},
{"href":"Lookup-Netgroup.html#Lookup-Netgroup"                                               ,"name":"30.16.2 Looking up one Netgroup"                                           ,"list":null},
{"href":"Netgroup-Membership.html#Netgroup-Membership"                                       ,"name":"30.16.3 Testing for Netgroup Membership"                                   ,"list":null}]}]},
{"href":"System-Management.html#System-Management"                                           ,"name":"31 System Management"                                                      ,"list":[
{"href":"Host-Identification.html#Host-Identification"                                       ,"name":"31.1 Host Identification"                                                  ,"list":null},
{"href":"Platform-Type.html#Platform-Type"                                                   ,"name":"31.2 Platform Type Identification"                                         ,"list":null},
{"href":"Filesystem-Handling.html#Filesystem-Handling"                                       ,"name":"31.3 Controlling and Querying Mounts"                                      ,"list":[
{"href":"Mount-Information.html#Mount-Information"                                           ,"name":"31.3.1 Mount Information"                                                  ,"list":[
{"href":"fstab.html#fstab"                                                                   ,"name":"31.3.1.1 The <samp>fstab</samp> file"                                      ,"list":null},
{"href":"mtab.html#mtab"                                                                     ,"name":"31.3.1.2 The <samp>mtab</samp> file"                                       ,"list":null},
{"href":"Other-Mount-Information.html#Other-Mount-Information"                               ,"name":"31.3.1.3 Other (Non-libc) Sources of Mount Information"                    ,"list":null}]},
{"href":"Mount_002dUnmount_002dRemount.html#Mount_002dUnmount_002dRemount"                   ,"name":"31.3.2 Mount, Unmount, Remount"                                            ,"list":null}]},
{"href":"System-Parameters.html#System-Parameters"                                           ,"name":"31.4 System Parameters"                                                    ,"list":null}]},
{"href":"System-Configuration.html#System-Configuration"                                     ,"name":"32 System Configuration Parameters"                                        ,"list":[
{"href":"General-Limits.html#General-Limits"                                                 ,"name":"32.1 General Capacity Limits"                                              ,"list":null},
{"href":"System-Options.html#System-Options"                                                 ,"name":"32.2 Overall System Options"                                               ,"list":null},
{"href":"Version-Supported.html#Version-Supported"                                           ,"name":"32.3 Which Version of POSIX is Supported"                                  ,"list":null},
{"href":"Sysconf.html#Sysconf"                                                               ,"name":"32.4 Using <code>sysconf</code>"                                           ,"list":[
{"href":"Sysconf-Definition.html#Sysconf-Definition"                                         ,"name":"32.4.1 Definition of <code>sysconf</code>"                                 ,"list":null},
{"href":"Constants-for-Sysconf.html#Constants-for-Sysconf"                                   ,"name":"32.4.2 Constants for <code>sysconf</code> Parameters"                      ,"list":null},
{"href":"Examples-of-Sysconf.html#Examples-of-Sysconf"                                       ,"name":"32.4.3 Examples of <code>sysconf</code>"                                   ,"list":null}]},
{"href":"Minimums.html#Minimums"                                                             ,"name":"32.5 Minimum Values for General Capacity Limits"                           ,"list":null},
{"href":"Limits-for-Files.html#Limits-for-Files"                                             ,"name":"32.6 Limits on File System Capacity"                                       ,"list":null},
{"href":"Options-for-Files.html#Options-for-Files"                                           ,"name":"32.7 Optional Features in File Support"                                    ,"list":null},
{"href":"File-Minimums.html#File-Minimums"                                                   ,"name":"32.8 Minimum Values for File System Limits"                                ,"list":null},
{"href":"Pathconf.html#Pathconf"                                                             ,"name":"32.9 Using <code>pathconf</code>"                                          ,"list":null},
{"href":"Utility-Limits.html#Utility-Limits"                                                 ,"name":"32.10 Utility Program Capacity Limits"                                     ,"list":null},
{"href":"Utility-Minimums.html#Utility-Minimums"                                             ,"name":"32.11 Minimum Values for Utility Limits"                                   ,"list":null},
{"href":"String-Parameters.html#String-Parameters"                                           ,"name":"32.12 String-Valued Parameters"                                            ,"list":null}]},
{"href":"Cryptographic-Functions.html#Cryptographic-Functions"                               ,"name":"33 DES Encryption and Password Handling"                                   ,"list":[
{"href":"Legal-Problems.html#Legal-Problems"                                                 ,"name":"33.1 Legal Problems"                                                       ,"list":null},
{"href":"getpass.html#getpass"                                                               ,"name":"33.2 Reading Passwords"                                                    ,"list":null},
{"href":"crypt.html#crypt"                                                                   ,"name":"33.3 Encrypting Passwords"                                                 ,"list":null},
{"href":"DES-Encryption.html#DES-Encryption"                                                 ,"name":"33.4 DES Encryption"                                                       ,"list":null}]},
{"href":"Debugging-Support.html#Debugging-Support"                                           ,"name":"34 Debugging support"                                                      ,"list":[
{"href":"Backtraces.html#Backtraces"                                                         ,"name":"34.1 Backtraces"                                                           ,"list":null}]},
{"href":"POSIX-Threads.html#POSIX-Threads"                                                   ,"name":"35 POSIX Threads"                                                          ,"list":[
{"href":"Thread_002dspecific-Data.html#Thread_002dspecific-Data"                             ,"name":"35.1 Thread-specific Data"                                                 ,"list":null},
{"href":"Non_002dPOSIX-Extensions.html#Non_002dPOSIX-Extensions"                             ,"name":"35.2 Non-POSIX Extensions"                                                 ,"list":[
{"href":"Default-Thread-Attributes.html#Default-Thread-Attributes"                           ,"name":"35.2.1 Setting Process-wide defaults for thread attributes"                ,"list":null}]}]},
{"href":"Internal-Probes.html#Internal-Probes"                                               ,"name":"36 Internal probes"                                                        ,"list":[
{"href":"Memory-Allocation-Probes.html#Memory-Allocation-Probes"                             ,"name":"36.1 Memory Allocation Probes"                                             ,"list":null},
{"href":"Mathematical-Function-Probes.html#Mathematical-Function-Probes"                     ,"name":"36.2 Mathematical Function Probes"                                         ,"list":null},
{"href":"Non_002dlocal-Goto-Probes.html#Non_002dlocal-Goto-Probes"                           ,"name":"36.3 Non-local Goto Probes"                                                ,"list":null}]},
{"href":"Language-Features.html#Language-Features"                                           ,"name":"Appendix A C Language Facilities in the Library"                           ,"list":[
{"href":"Consistency-Checking.html#Consistency-Checking"                                     ,"name":"A.1 Explicitly Checking Internal Consistency"                              ,"list":null},
{"href":"Variadic-Functions.html#Variadic-Functions"                                         ,"name":"A.2 Variadic Functions"                                                    ,"list":[
{"href":"Why-Variadic.html#Why-Variadic"                                                     ,"name":"A.2.1 Why Variadic Functions are Used"                                     ,"list":null},
{"href":"How-Variadic.html#How-Variadic"                                                     ,"name":"A.2.2 How Variadic Functions are Defined and Used"                         ,"list":[
{"href":"Variadic-Prototypes.html#Variadic-Prototypes"                                       ,"name":"A.2.2.1 Syntax for Variable Arguments"                                     ,"list":null},
{"href":"Receiving-Arguments.html#Receiving-Arguments"                                       ,"name":"A.2.2.2 Receiving the Argument Values"                                     ,"list":null},
{"href":"How-Many-Arguments.html#How-Many-Arguments"                                         ,"name":"A.2.2.3 How Many Arguments Were Supplied"                                  ,"list":null},
{"href":"Calling-Variadics.html#Calling-Variadics"                                           ,"name":"A.2.2.4 Calling Variadic Functions"                                        ,"list":null},
{"href":"Argument-Macros.html#Argument-Macros"                                               ,"name":"A.2.2.5 Argument Access Macros"                                            ,"list":null}]},
{"href":"Variadic-Example.html#Variadic-Example"                                             ,"name":"A.2.3 Example of a Variadic Function"                                      ,"list":null}]},
{"href":"Null-Pointer-Constant.html#Null-Pointer-Constant"                                   ,"name":"A.3 Null Pointer Constant"                                                 ,"list":null},
{"href":"Important-Data-Types.html#Important-Data-Types"                                     ,"name":"A.4 Important Data Types"                                                  ,"list":null},
{"href":"Data-Type-Measurements.html#Data-Type-Measurements"                                 ,"name":"A.5 Data Type Measurements"                                                ,"list":[
{"href":"Width-of-Type.html#Width-of-Type"                                                   ,"name":"A.5.1 Computing the Width of an Integer Data Type"                         ,"list":null},
{"href":"Range-of-Type.html#Range-of-Type"                                                   ,"name":"A.5.2 Range of an Integer Type"                                            ,"list":null},
{"href":"Floating-Type-Macros.html#Floating-Type-Macros"                                     ,"name":"A.5.3 Floating Type Macros"                                                ,"list":[
{"href":"Floating-Point-Concepts.html#Floating-Point-Concepts"                               ,"name":"A.5.3.1 Floating Point Representation Concepts"                            ,"list":null},
{"href":"Floating-Point-Parameters.html#Floating-Point-Parameters"                           ,"name":"A.5.3.2 Floating Point Parameters"                                         ,"list":null},
{"href":"IEEE-Floating-Point.html#IEEE-Floating-Point"                                       ,"name":"A.5.3.3 IEEE Floating Point"                                               ,"list":null}]},
{"href":"Structure-Measurement.html#Structure-Measurement"                                   ,"name":"A.5.4 Structure Field Offset Measurement"                                  ,"list":null}]}]},
{"href":"Library-Summary.html#Library-Summary"                                               ,"name":"Appendix B Summary of Library Facilities"                                  ,"list":null},
{"href":"Installation.html#Installation"                                                     ,"name":"Appendix C Installing the GNU C Library"                                   ,"list":[
{"href":"Configuring-and-compiling.html#Configuring-and-compiling"                           ,"name":"C.1 Configuring and compiling the GNU C Library"                           ,"list":null},
{"href":"Running-make-install.html#Running-make-install"                                     ,"name":"C.2 Installing the C Library"                                              ,"list":null},
{"href":"Tools-for-Compilation.html#Tools-for-Compilation"                                   ,"name":"C.3 Recommended Tools for Compilation"                                     ,"list":null},
{"href":"Linux.html#Linux"                                                                   ,"name":"C.4 Specific advice for GNU/Linux systems"                                 ,"list":null},
{"href":"Reporting-Bugs.html#Reporting-Bugs"                                                 ,"name":"C.5 Reporting Bugs"                                                        ,"list":null}]},
{"href":"Maintenance.html#Maintenance"                                                       ,"name":"Appendix D Library Maintenance"                                            ,"list":[
{"href":"Source-Layout.html#Source-Layout"                                                   ,"name":"D.1 Adding New Functions"                                                  ,"list":[
{"href":"Adding-Platform_002dspecific.html#Adding-Platform_002dspecific"                     ,"name":"D.1.1 Platform-specific types, macros and functions"                       ,"list":null}]},
{"href":"Porting.html#Porting"                                                               ,"name":"D.2 Porting the GNU C Library"                                             ,"list":[
{"href":"Hierarchy-Conventions.html#Hierarchy-Conventions"                                   ,"name":"D.2.1 Layout of the <samp>sysdeps</samp> Directory Hierarchy"              ,"list":null},
{"href":"Porting-to-Unix.html#Porting-to-Unix"                                               ,"name":"D.2.2 Porting the GNU C Library to Unix Systems"                           ,"list":null}]}]},
{"href":"Platform.html#Platform"                                                             ,"name":"Appendix E Platform-specific facilities"                                   ,"list":[
{"href":"PowerPC.html#PowerPC"                                                               ,"name":"E.1 PowerPC-specific Facilities"                                           ,"list":null}]},
{"href":"Contributors.html#Contributors"                                                     ,"name":"Appendix F Contributors to the GNU C Library"                              ,"list":null},
{"href":"Free-Manuals.html#Free-Manuals"                                                     ,"name":"Appendix G Free Software Needs Free Documentation"                         ,"list":null},
{"href":"Copying.html#Copying"                                                               ,"name":"Appendix H GNU Lesser General Public License"                              ,"list":null},
{"href":"Documentation-License.html#Documentation-License"                                   ,"name":"Appendix I GNU Free Documentation License"                                 ,"list":null},
{"href":"Concept-Index.html#Concept-Index"                                                   ,"name":"Concept Index"                                                             ,"list":null},
{"href":"Type-Index.html#Type-Index"                                                         ,"name":"Type Index"                                                                ,"list":null},
{"href":"Function-Index.html#Function-Index"                                                 ,"name":"Function and Macro Index"                                                  ,"list":null},
{"href":"Variable-Index.html#Variable-Index"                                                 ,"name":"Variable and Constant Macro Index"                                         ,"list":null},
{"href":"File-Index.html#File-Index"                                                         ,"name":"Program and File Index"                                                    ,"list":null}
];