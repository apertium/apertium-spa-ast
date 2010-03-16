TAGGER_UNSUPERVISED_ITERATIONS=8
BASENAME=apertium-es-ast
LANG1=es
LANG2=ast
TAGGER=$(LANG2)-tagger-data
PREFIX=$(LANG2)-$(LANG1)

all: $(PREFIX).prob

$(PREFIX).prob: $(BASENAME).$(LANG2).tsx $(TAGGER)/$(LANG2).dic $(TAGGER)/$(LANG2).crp
	apertium-validate-tagger $(BASENAME).$(LANG2).tsx
	apertium-tagger -t $(TAGGER_UNSUPERVISED_ITERATIONS) \
                           $(TAGGER)/$(LANG2).dic \
                           $(TAGGER)/$(LANG2).crp \
                           $(BASENAME).$(LANG2).tsx \
                           $(PREFIX).prob;

$(TAGGER)/$(LANG2).dic: $(BASENAME).$(LANG2).dix $(PREFIX).automorf.bin
	@echo "Generating $@";
	@echo "This may take some time. Please, take a cup of coffee and come back later.";
	apertium-validate-dictionary $(BASENAME).$(LANG2).dix
	apertium-validate-tagger $(BASENAME).$(LANG2).tsx
	lt-expand $(BASENAME).$(LANG2).dix | grep -v "__REGEXP__" | grep -v ":<:" |\
	awk 'BEGIN{FS=":>:|:"}{print $$1 ".";}' | apertium-destxt >$(LANG2).dic.expanded
	@echo "." >>$(LANG2).dic.expanded
	@echo "?" >>$(LANG2).dic.expanded
	@echo ";" >>$(LANG2).dic.expanded
	@echo ":" >>$(LANG2).dic.expanded
	@echo "!" >>$(LANG2).dic.expanded
	@echo "42" >>$(LANG2).dic.expanded
	@echo "," >>$(LANG2).dic.expanded
	@echo "(" >>$(LANG2).dic.expanded
	@echo "\\[" >>$(LANG2).dic.expanded
	@echo ")" >>$(LANG2).dic.expanded
	@echo "\\]" >>$(LANG2).dic.expanded
	@echo "¿" >>$(LANG2).dic.expanded
	@echo "¡" >>$(LANG2).dic.expanded
	lt-proc -a $(PREFIX).automorf.bin <$(LANG2).dic.expanded | \
	apertium-filter-ambiguity $(BASENAME).$(LANG2).tsx > $@
	rm $(LANG2).dic.expanded;

$(TAGGER)/$(LANG2).crp: $(PREFIX).automorf.bin $(TAGGER)/$(LANG2).crp.txt
	apertium-destxt < $(TAGGER)/$(LANG2).crp.txt | lt-proc $(PREFIX).automorf.bin > $(TAGGER)/$(LANG2).crp

clean:
	rm -f $(PREFIX).prob $(TAGGER)/$(LANG2).crp $(TAGGER)/$(LANG2).dic
