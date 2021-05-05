SOURCE_DOCS := $(wildcard *.md)

EXPORTED_DOCS=\
 $(SOURCE_DOCS:.md=.html) \
 $(SOURCE_DOCS:.md=.pdf) 

#PANDOC_OPTIONS=--smart --standalone
PANDOC_OPTIONS=-f markdown

PANDOC_HTML_OPTIONS=--to html5
PANDOC_PDF_OPTIONS=

%.html : %.md
	pandoc $(PANDOC_OPTIONS) $(PANDOC_HTML_OPTIONS) -o $@ $<

%.pdf : %.md
	pandoc $(PANDOC_OPTIONS) $(PANDOC_PDF_OPTIONS) -o $@ $<
	
.PHONY: all clean

all : $(EXPORTED_DOCS)

clean:
	rm -f $(EXPORTED_DOCS)

