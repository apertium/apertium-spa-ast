VERSION=1.0.6
LANG1=es
LANG2=ast
PREFIX1=$(LANG1)-$(LANG2)
PREFIX2=$(LANG2)-$(LANG1)

BASENAME=apertium-$(PREFIX1)

TARGETS_COMMON =  \
     $(PREFIX1).automorf.bin $(PREFIX1).autobil.bin $(PREFIX1).autogen.bin \
     $(PREFIX2).automorf.bin $(PREFIX2).autobil.bin \
     $(PREFIX2).autogen.bin \
     $(PREFIX1).t1x.bin \
     $(PREFIX2).t1x.bin

$(BASENAME).$(LANG1).dix:
	xmllint --xinclude $(BASENAME).$(LANG1).dix.xml > $(BASENAME).$(LANG1).dix
$(BASENAME).$(LANG2).dix:
	xmllint --xinclude $(BASENAME).$(LANG2).dix.xml > $(BASENAME).$(LANG2).dix
$(BASENAME).$(LANG1)-$(LANG2).dix:
	xmllint --xinclude $(BASENAME).$(LANG1)-$(LANG2).dix.xml > $(BASENAME).$(LANG1)-$(LANG2).dix
     
$(PREFIX1).automorf.bin: $(BASENAME).$(LANG1).dix
	apertium-validate-dictionary $(BASENAME).$(LANG1).dix
	lt-comp lr $(BASENAME).$(LANG1).dix $@

$(PREFIX1).autobil.bin: $(BASENAME).$(PREFIX1).dix
	apertium-validate-dictionary $(BASENAME).$(PREFIX1).dix
	lt-comp lr $(BASENAME).$(PREFIX1).dix $@

$(PREFIX1).autogen.bin: $(BASENAME).$(LANG2).dix
	apertium-validate-dictionary $(BASENAME).$(LANG2).dix
	lt-comp rl $(BASENAME).$(LANG2).dix $@

#$(PREFIX1).autopgen.bin: $(BASENAME).post-$(LANG2).dix
#	apertium-validate-dictionary $(BASENAME).post-$(LANG2).dix
#	lt-comp lr $(BASENAME).post-$(LANG2).dix $@

$(PREFIX2).automorf.bin: $(BASENAME).$(LANG2).dix
	apertium-validate-dictionary $(BASENAME).$(LANG2).dix
	lt-comp lr $(BASENAME).$(LANG2).dix $@

$(PREFIX2).autobil.bin: $(BASENAME).$(PREFIX1).dix
	apertium-validate-dictionary $(BASENAME).$(PREFIX1).dix
	lt-comp rl $(BASENAME).$(PREFIX1).dix $@

$(PREFIX2).autogen.bin: $(BASENAME).$(LANG1).dix
	apertium-validate-dictionary $(BASENAME).$(LANG1).dix
	lt-comp rl $(BASENAME).$(LANG1).dix $@

#$(PREFIX2).autopgen.bin: $(BASENAME).post-$(LANG1).dix
#	apertium-validate-dictionary $(BASENAME).post-$(LANG1).dix
#	lt-comp lr $(BASENAME).post-$(LANG1).dix $@

$(PREFIX1).t1x.bin: $(BASENAME).$(PREFIX1).t1x
	apertium-validate-transfer $(BASENAME).$(PREFIX1).t1x
	apertium-preprocess-transfer $(BASENAME).$(PREFIX1).t1x $@

$(PREFIX1).t2x.bin: $(BASENAME).$(PREFIX1).t2x
	apertium-validate-interchunk $(BASENAME).$(PREFIX1).t2x
	apertium-preprocess-transfer $(BASENAME).$(PREFIX1).t2x $@

$(PREFIX1).t3x.bin: $(BASENAME).$(PREFIX1).t3x
	apertium-validate-postchunk $(BASENAME).$(PREFIX1).t3x
	apertium-preprocess-transfer $(BASENAME).$(PREFIX1).t3x $@

$(PREFIX2).t1x.bin: $(BASENAME).$(PREFIX2).t1x
	apertium-validate-transfer $(BASENAME).$(PREFIX2).t1x
	apertium-preprocess-transfer $(BASENAME).$(PREFIX2).t1x $@

$(PREFIX2).t2x.bin: $(BASENAME).$(PREFIX2).t2x
	apertium-validate-interchunk $(BASENAME).$(PREFIX2).t2x
	apertium-preprocess-transfer $(BASENAME).$(PREFIX2).t2x $@

$(PREFIX2).t3x.bin: $(BASENAME).$(PREFIX2).t3x
	apertium-validate-postchunk $(BASENAME).$(PREFIX2).t3x
	apertium-preprocess-transfer $(BASENAME).$(PREFIX2).t3x $@


EXTRA_DIST=$(BASENAME).$(LANG1).dix $(BASENAME).$(PREFIX1).dix \
           $(BASENAME).post-$(LANG1).dix $(BASENAME).post-$(LANG2).dix \
	   $(BASENAME).$(LANG2).dix \
	   $(BASENAME).$(LANG1).dix.xml \
	   $(BASENAME).$(LANG2).dix.xml \
	   $(BASENAME).$(PREFIX1).dix.xml \
           $(PREFIX1).prob $(PREFIX2).prob \
	   $(BASENAME).$(PREFIX1).t1x \
	   $(BASENAME).$(PREFIX2).t1x \
	   $(BASENAME).$(LANG1).tsx \
	   $(BASENAME).$(LANG2).tsx modes.xml apertium-$(PREFIX1).symbols.xml

#           $(LANG1)-tagger-data/README $(LANG2)-tagger-data/README 

clean-dicts:
	touch $(BASENAME).$(LANG1).dix $(BASENAME).$(LANG2).dix $(BASENAME).$(PREFIX1).dix
	rm $(BASENAME).$(LANG1).dix
	rm $(BASENAME).$(LANG2).dix
	rm $(BASENAME).$(PREFIX1).dix
	
apertium_es_astdir=$(prefix)/share/apertium/apertium-$(PREFIX1)/
apertium_es_modesdir=$(prefix)/share/apertium/modes/

$(PREFIX1).mode: modes.xml 
	apertium-gen-modes modes.xml

$(PREFIX2).mode: modes.xml 
	apertium-gen-modes modes.xml

apertium_es_ast_DATA=$(PREFIX1).automorf.bin $(PREFIX2).automorf.bin \
                    $(PREFIX1).autobil.bin $(PREFIX2).autobil.bin \
                    $(PREFIX1).autogen.bin $(PREFIX2).autogen.bin \
                    $(PREFIX1).prob $(PREFIX2).prob \
		    $(PREFIX1).t1x.bin \
		    $(PREFIX2).t1x.bin \
	            $(PREFIX1).mode $(PREFIX2).mode modes.xml apertium-$(PREFIX1).symbols.xml
		  
install-data-local:
	apertium-gen-modes modes.xml apertium-$(PREFIX1)
	$(INSTALL_DATA) $(PREFIX1).mode $(apertium_es_modesdir)
	$(INSTALL_DATA) $(PREFIX2).mode $(apertium_es_modesdir)
	$(INSTALL_DATA) $(BASENAME).$(PREFIX1).t1x $(apertium_es_astdir)
	$(INSTALL_DATA) $(BASENAME).$(PREFIX2).t1x $(apertium_es_astdir)

CLEANFILES = -rf $(TARGETS_COMMON) modes
