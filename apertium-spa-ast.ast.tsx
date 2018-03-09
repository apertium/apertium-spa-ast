<?xml version="1.0" encoding="UTF-8"?>
<tagger name="spanish">
<tagset>

  <!-- tagset asturiano -->
  <def-label name="CONPR" closed="true">
    <tags-item lemma="con" tags="pr"/>
  </def-label> 
  <def-label name="PREP" closed="true">
    <tags-item tags="pr"/>
  </def-label>
  <def-label name="PARAPR" closed="true">
    <tags-item lemma="para" tags="pr"/>
  </def-label>  
  <def-label name="PARAVBLEX" closed="true">
    <tags-item lemma="parar" tags="vblex.imp.p2.sg"/>
    <tags-item lemma="parar" tags="vblex.pri.p3.sg"/>	
  </def-label>  
  <def-label name="VINOVBLEX" closed="true">
    <tags-item lemma="venir" tags="vblex.ifi.p3.sg"/>
  </def-label>
  <def-label name="VINONOM" closed="true">
    <tags-item lemma="vino" tags="n.m.sg"/>
  </def-label>
  <def-label name="PRONTOADJ" closed="true">
    <tags-item lemma="pronto" tags="adj.*"/>
  </def-label>
  <def-label name="PARADANOM" closed="true"> 
    <tags-item lemma="parada" tags="n.*"/>
  </def-label>    
  <def-label name="ADJBUENO" closed="true">
    <tags-item lemma="bueno" tags="adj.*"/>
    <tags-item lemma="gran" tags="adj.*"/>
    <tags-item lemma="espléndido" tags="adj.*"/>
    <tags-item lemma="magnífico" tags="adj.*"/>
  </def-label>        
  <!-- fin tagset asturiano-->
  
  <def-label name="QUECNJ" closed="true">
    <tags-item lemma="que" tags="cnjsub"/>
  </def-label>  
  <def-label name="QUEREL" closed="true">
    <tags-item lemma="que" tags="rel.*"/>
  </def-label>
  <def-label name="ALGOADV" closed="true">
    <tags-item lemma="algo" tags="adv"/>
  </def-label>
  <def-label name="ACRONIMO">
    <tags-item tags="n.acr"/>
  </def-label>
  <def-label name="INTNOM" closed="true">
    <tags-item tags="prn.itg.*"/>
  </def-label>
  <def-label name="INTADJ" closed="true">
    <tags-item tags="adj.itg.*"/>
  </def-label>
  <def-label name="INTADV" closed="true">
    <tags-item tags="adv.itg"/>
  </def-label>
  <def-label name="PREADV" closed="true">
    <tags-item tags="preadv"/>
  </def-label>
  <def-label name="ADV">
    <tags-item tags="adv"/>
  </def-label>
  <def-label name="CNJSUBS" closed="true">
    <tags-item tags="cnjsub"/>
  </def-label>
  <def-label name="CNJCOORD" closed="true">
    <tags-item tags="cnjcoo"/>
  </def-label>
  <def-label name="CNJADV">
    <tags-item tags="cnjadv"/>
  </def-label>
  <def-label name="DETNT" closed="true">
    <tags-item tags="detnt"/>
  </def-label>
  <def-label name="DET" closed="true">
    <tags-item tags="det.*"/>
  </def-label>
  <def-label name="INTERJ">
    <tags-item tags="ij"/>
  </def-label>
  <def-label name="NOM">
    <tags-item tags="n.*"/>
  </def-label>
  <def-label name="ANTROPONIM">
    <tags-item tags="np.ant"/>
  </def-label>
  <def-label name="TOPONIM">
    <tags-item tags="np.loc"/>
  </def-label>
  <def-label name="NPALTRES">
    <tags-item tags="np.al"/>
  </def-label>
  <def-label name="NUM" closed="true">
    <tags-item tags="num.*"/>
    <tags-item tags="num"/>
  </def-label>
  <def-label name="PREDET" closed="true">
    <tags-item tags="predet.*"/>
  </def-label>
  <def-label name="PRNTNNT" closed="true">
    <tags-item tags="prn.tn.nt"/>
  </def-label>
  <def-label name="PRNTN" closed="true">
    <tags-item tags="prn.tn.*"/>
  </def-label>
  <def-label name="PRNENCREF" closed="true">
    <tags-item tags="prn.enc.ref.*"/>
  </def-label>
  <def-label name="PRNPROREF" closed="true">
    <tags-item tags="prn.pro.ref.*"/>
  </def-label>
  <def-label name="PRNENC" closed="true">
    <tags-item tags="prn.enc.*"/>
  </def-label>
  <def-label name="PRNPRO" closed="true">
    <tags-item tags="prn.pro.*"/>
  </def-label>
  <def-label name="VBMODINF">
    <tags-item tags="vbmod.inf"/>
  </def-label>
  <def-label name="VBMODGER">
    <tags-item tags="vbmod.ger"/>
  </def-label>
  <def-label name="VBMODPARTPI">
    <tags-item tags="vbmod.pp.*"/>
  </def-label>
  <def-label name="VBMODPFCI">
    <tags-item tags="vbmod.pri.*"/>
    <tags-item tags="vbmod.fti.*"/>
    <tags-item tags="vbmod.cni.*"/>
  </def-label>
  <def-label name="VBMODIPI">
    <tags-item tags="vbmod.pii.*"/>
    <tags-item tags="vbmod.ifi.*"/>
  </def-label>
  <def-label name="VBMODSUBJ">
    <tags-item tags="vbmod.prs.*"/>
    <tags-item tags="vbmod.pis.*"/>
    <tags-item tags="vbmod.fts.*"/>
  </def-label>
  <def-label name="VBMODIMP">
    <tags-item tags="vbmod.imp.*"/>
  </def-label>
  <def-label name="VLEXINF">
    <tags-item tags="vblex.inf"/>
  </def-label>
  <def-label name="VLEXGER">
    <tags-item tags="vblex.ger"/>
  </def-label>
  <def-label name="VLEXPARTPI">
    <tags-item tags="vblex.pp.*"/>
  </def-label>
  <def-label name="VLEXPFCI">
    <tags-item tags="vblex.pri.*"/>
    <tags-item tags="vblex.fti.*"/>
    <tags-item tags="vblex.cni.*"/>
  </def-label>
  <def-label name="VLEXIPI">
    <tags-item tags="vblex.pii.*"/>
    <tags-item tags="vblex.ifi.*"/>
  </def-label>
  <def-label name="VLEXSUBJ">
    <tags-item tags="vblex.prs.*"/>
    <tags-item tags="vblex.pis.*"/>
    <tags-item tags="vblex.fts.*"/>
  </def-label>
  <def-label name="VLEXIMP">
    <tags-item tags="vblex.imp.*"/>
  </def-label>
  <def-label name="VSERINF" closed="true">
    <tags-item tags="vbser.inf"/>
  </def-label>
  <def-label name="VSERGER" closed="true">
    <tags-item tags="vbser.ger"/>
  </def-label>
  <def-label name="VSERPARTPI" closed="true">
    <tags-item tags="vbser.pp.*"/>
  </def-label>
  <def-label name="VSERPFCI" closed="true">
    <tags-item tags="vbser.pri.*"/>
    <tags-item tags="vbser.fti.*"/>
    <tags-item tags="vbser.cni.*"/>
  </def-label>
  <def-label name="VSERIPI" closed="true">
    <tags-item tags="vbser.pii.*"/>
    <tags-item tags="vbser.ifi.*"/>
  </def-label>
  <def-label name="VSERSUBJ" closed="true">
    <tags-item tags="vbser.prs.*"/>
    <tags-item tags="vbser.pis.*"/>
    <tags-item tags="vbser.fts.*"/>
  </def-label>
  <def-label name="VSERIMP" closed="true">
    <tags-item tags="vbser.imp.*"/>
  </def-label>
  <def-label name="VHABER" closed="true">
    <tags-item tags="vbhaver.*"/>
  </def-label>  
  <def-label name="VHABERINF" closed="true">
    <tags-item tags="vbhaver.inf"/>
  </def-label>
  <def-label name="VHABERGER" closed="true">
    <tags-item tags="vbhaver.ger"/>
  </def-label>
  <def-label name="VHABERPARTPI" closed="true">
    <tags-item tags="vbhaver.pp.*"/>
  </def-label>
  <def-label name="VHABERPFCI" closed="true">
    <tags-item tags="vbhaver.pri.*"/>
    <tags-item tags="vbhaver.fti.*"/>
    <tags-item tags="vbhaver.cni.*"/>
  </def-label>
  <def-label name="VHABERIPI" closed="true">
    <tags-item tags="vbhaver.pii.*"/>
    <tags-item tags="vbhaver.ifi.*"/> 
  </def-label>
  <def-label name="VHABERSUBJ" closed="true">
    <tags-item tags="vbhaver.prs.*"/>
    <tags-item tags="vbhaver.pis.*"/>
    <tags-item tags="vbhaver.fts.*"/>
  </def-label>
  <def-label name="ADJMS">
    <tags-item tags="adj.m.sg"/>
  </def-label>  
  <def-label name="ADJ">
    <tags-item tags="adj.*"/>
  </def-label>
  <def-label name="REL" closed="true">
    <tags-item tags="rel.an.*"/>
    <tags-item tags="rel.aa.*"/>
    <tags-item tags="rel.nn.*"/>
  </def-label>
  <def-label name="RELADV" closed="true">
    <tags-item tags="rel.adv"/>
  </def-label>
  <def-label name="VERB">
    <tags-item tags="vblex.*"/>
    <tags-item tags="vbser.*"/>
    <tags-item tags="vbhaber.*"/>	
    <tags-item tags="vbmod.*"/>
  </def-label>
  <def-label name="COMA" closed="true">
    <tags-item tags="cm"/>
  </def-label>   

   <def-mult name="NP," closed="true">
    <sequence>
      <label-item label="ANTROPONIM"/>
      <tags-item tags="cm"/>
    </sequence>
  </def-mult>  
  <def-mult name="PREPDET" closed="true">
    <sequence>
      <label-item label="PREP"/>
      <tags-item tags="det.def.m.sg"/>
    </sequence>
  </def-mult>
  <def-mult name="PRCNJ" closed="true">
    <sequence>
      <label-item label="PREP"/>
      <label-item label="QUECNJ"/>
    </sequence>
    <sequence>
      <label-item label="PREP"/>
      <label-item label="CNJSUBS"/>
    </sequence>
  </def-mult>
  <def-mult name="PRREL" closed="true">
    <sequence>
      <label-item label="PREP"/>
      <label-item label="QUEREL"/>
    </sequence>
    <sequence>
      <label-item label="PREP"/>
      <label-item label="REL"/>
    </sequence>
  </def-mult>
  <def-mult name="INFLEXPRNENC">
    <sequence>
      <label-item label="VLEXINF"/>
      <label-item label="PRNENC"/>
   </sequence>
    <sequence>
      <label-item label="VLEXINF"/>
      <label-item label="PRNENC"/>
      <label-item label="PRNENC"/>
   </sequence>
  </def-mult>
  <def-mult name="GERLEXPRNENC">
    <sequence>
      <label-item label="VLEXGER"/>
      <label-item label="PRNENC"/>
   </sequence>
    <sequence>
      <label-item label="VLEXGER"/>
      <label-item label="PRNENC"/>
      <label-item label="PRNENC"/>
   </sequence>
  </def-mult>
  <def-mult name="IMPLEXPRNENC">
    <sequence>
      <label-item label="VLEXIMP"/>
      <label-item label="PRNENC"/>
   </sequence>
    <sequence>
      <label-item label="VLEXIMP"/>
      <label-item label="PRNENC"/>
      <label-item label="PRNENC"/>
   </sequence>
  </def-mult>
  <def-mult name="VLEXPFCIPRNENC">
    <sequence>
      <label-item label="VLEXPFCI"/>
      <label-item label="PRNENC"/>
   </sequence>
    <sequence>
      <label-item label="VLEXPFCI"/>
      <label-item label="PRNENC"/>
      <label-item label="PRNENC"/>
   </sequence>
  </def-mult>
  <def-mult name="INFSERPRNENC" closed="true">
    <sequence>
      <label-item label="VSERINF"/>
      <label-item label="PRNENC"/>
    </sequence>
    <sequence>
      <label-item label="VSERINF"/>
      <label-item label="PRNENC"/>
      <label-item label="PRNENC"/>
    </sequence>
  </def-mult>
  <def-mult name="GERSERPRNENC" closed="true">
    <sequence>
      <label-item label="VSERGER"/>
      <label-item label="PRNENC"/>
    </sequence>
    <sequence>
      <label-item label="VSERINF"/>
      <label-item label="PRNENC"/>
      <label-item label="PRNENC"/>
    </sequence>
  </def-mult>
  <def-mult name="IMPSERPRNENC" closed="true">
    <sequence>
      <label-item label="VSERIMP"/>
      <label-item label="PRNENC"/>
    </sequence>
    <sequence>
      <label-item label="VSERINF"/>
      <label-item label="PRNENC"/>
      <label-item label="PRNENC"/>
    </sequence>
  </def-mult>
  <def-mult name="INFMODPRNENC" closed="true">
    <sequence>
      <label-item label="VBMODINF"/>
      <label-item label="PRNENC"/>
    </sequence>
    <sequence>
      <label-item label="VBMODINF"/>
      <label-item label="PRNENC"/>
      <label-item label="PRNENC"/>
    </sequence>
  </def-mult>
  <def-mult name="GERMODPRNENC" closed="true">
    <sequence>
      <label-item label="VBMODGER"/>
      <label-item label="PRNENC"/>
    </sequence>
    <sequence>
      <label-item label="VBMODINF"/>
      <label-item label="PRNENC"/>
      <label-item label="PRNENC"/>
    </sequence>
  </def-mult>
  <def-mult name="IMPMODPRNENC" closed="true">
    <sequence>
      <label-item label="VBMODIMP"/>
      <label-item label="PRNENC"/>
    </sequence>
    <sequence>
      <label-item label="VBMODINF"/>
      <label-item label="PRNENC"/>
      <label-item label="PRNENC"/>
    </sequence>
  </def-mult> 

  <def-mult name="INFHABERPRNENC" closed="true">
    <sequence>
      <label-item label="VHABERINF"/>
      <label-item label="PRNENC"/>
    </sequence>
    <sequence>
      <label-item label="VHABERINF"/>
      <label-item label="PRNENC"/>
      <label-item label="PRNENC"/>
    </sequence>
  </def-mult>
  <def-mult name="GERHABERPRNENC" closed="true">
    <sequence>
      <label-item label="VHABERGER"/>
      <label-item label="PRNENC"/>
    </sequence>
    <sequence>
      <label-item label="VHABERINF"/>
      <label-item label="PRNENC"/>
      <label-item label="PRNENC"/>
    </sequence>
  </def-mult>
  <def-mult name="VERBPRNENC" closed="true">
    <sequence>
      <label-item label="VERB"/>
      <label-item label="PRNENC"/>
    </sequence>
  </def-mult>  

  </tagset>  
  
  
  
  <forbid>
  <!-- forbid asturiano -->  
  

  
  <!-- Prohibiciones 'para' preposición -->
  <!--
    <label-sequence>
      <label-item label="PARAPR"/>
      <label-item label="PREP"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PARAPR"/>
      <label-item label="CONPR"/>
    </label-sequence>	
    <label-sequence>
      <label-item label="PREP"/>
      <label-item label="PARAPR"/>
	</label-sequence>  
    <label-sequence>
      <label-item label="ADV"/>
      <label-item label="PARAPR"/>
	</label-sequence>  
    <label-sequence>
      <label-item label="ANTROPONIM"/>
      <label-item label="PARAPR"/>
    </label-sequence>		
	-->
   <label-sequence>
      <label-item label="PRNPRO"/>
      <label-item label="PARAPR"/>
	</label-sequence>		
	<!--
    <label-sequence>
      <label-item label="VERB"/>
      <label-item label="PARAPR"/>
	</label-sequence>	
	-->
		
	
  <!-- Prohibiciones 'para' verbo -->	
    <label-sequence>
      <label-item label="PARAVBLEX"/>	
      <label-item label="DET"/>
	</label-sequence>
    <label-sequence>
      <label-item label="VERB"/>
      <label-item label="PARAVBLEX"/>
	</label-sequence>		
    <label-sequence>
      <label-item label="PARAVBLEX"/>	
      <label-item label="VERB"/>
	</label-sequence>
    <label-sequence>
      <label-item label="PARAVBLEX"/>	
      <label-item label="VLEXINF"/>
	</label-sequence>
	
  <!-- Prohibiciones imperativo -->	
    <label-sequence>
      <label-item label="NOM"/>
      <label-item label="VLEXIMP"/>
    </label-sequence>
    <label-sequence>
      <label-item label="ANTROPONIM"/>
      <label-item label="VLEXIMP"/>
    </label-sequence>	

  <!-- Prohibiciones 'parada' nombre -->		
    <label-sequence>
      <label-item label="VLEXINF"/>
      <label-item label="PARADANOM"/>		  
	</label-sequence>
    <label-sequence>
      <label-item label="ADJBUENO"/>
      <label-item label="PARADANOM"/>		  
	</label-sequence>

  <!-- Prohibiciones 'vino' nombre -->		
    <label-sequence>
      <label-item label="VINONOM"/>
      <label-item label="DET"/>		  
	</label-sequence>

  <!-- Prohibiciones 'vino' verbo -->		
    <label-sequence>
      <label-item label="VINOVBLEX"/>
      <label-item label="ADJMS"/>		  
	</label-sequence>	
    <label-sequence>
      <label-item label="VINOVBLEX"/>
      <label-item label="QUEREL"/>		  
	</label-sequence>		
			
  <!-- fin forbid asturiano -->   
  
    <label-sequence>
      <label-item label="ALGOADV"/>
      <label-item label="QUECNJ"/>
    </label-sequence>	
    <label-sequence>
      <label-item label="ALGOADV"/>
      <label-item label="PREADV"/>
    </label-sequence>
    <label-sequence>
      <label-item label="ALGOADV"/>
      <label-item label="ADV"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PREP"/>
      <label-item label="PREP"/>
    </label-sequence>
   <!--<label-sequence>
      <label-item label="PREP"/>
      <label-item label="PREPDET"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PREP"/>
      <label-item label="VLEXPFCI"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PREP"/>
      <label-item label="VLEXIPI"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PREP"/>
      <label-item label="VLEXSUBJ"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PREP"/>
      <label-item label="VLEXIMP"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PREP"/>
      <label-item label="IMPLEXPRNENC"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PREP"/>
      <label-item label="VSERPFCI"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PREP"/>
      <label-item label="VSERIPI"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PREP"/>
      <label-item label="VSERSUBJ"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PREP"/>
      <label-item label="VSERIMP"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PREP"/>
      <label-item label="IMPSERPRNENC"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PREP"/>
      <label-item label="VHABERPFCI"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PREP"/>
      <label-item label="VHABERIPI"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PREP"/>
      <label-item label="VHABERSUBJ"/>
    </label-sequence>-->
    <label-sequence>
      <label-item label="DET"/>
      <label-item label="VLEXPFCI"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DET"/>
      <label-item label="VLEXIPI"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DET"/>
      <label-item label="VLEXSUBJ"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DET"/>
      <label-item label="VLEXIMP"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DET"/>
      <label-item label="VLEXGER"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DET"/>
      <label-item label="VSERPFCI"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DET"/>
      <label-item label="VSERIPI"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DET"/>
      <label-item label="VSERSUBJ"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DET"/>
      <label-item label="VSERIMP"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DET"/>
      <label-item label="VSERGER"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DET"/>
      <label-item label="VHABERPFCI"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DET"/>
      <label-item label="VHABERIPI"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DET"/>
      <label-item label="VHABERSUBJ"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DET"/>
      <label-item label="VHABERGER"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DETNT"/>
      <label-item label="VLEXIMP"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DETNT"/>
      <label-item label="VLEXGER"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DETNT"/>
      <label-item label="VLEXINF"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DETNT"/>
      <label-item label="VSERIMP"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DETNT"/>
      <label-item label="VSERGER"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DETNT"/>
      <label-item label="VSERINF"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DETNT"/>
      <label-item label="VHABERGER"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DETNT"/>
      <label-item label="VHABERINF"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DETNT"/>
      <label-item label="NOM"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DETNT"/>
      <label-item label="ACRONIMO"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DETNT"/>
      <label-item label="NUM"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DET"/>
      <label-item label="PRNPRO"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DET"/>
      <label-item label="PRNENC"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DET"/>
      <label-item label="DET"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VLEXIMP"/>
      <label-item label="VLEXPFCI"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VLEXIMP"/>
      <label-item label="VLEXIPI"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VLEXIMP"/>
      <label-item label="VLEXSUBJ"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VLEXIMP"/>
      <label-item label="VLEXIMP"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VLEXIMP"/>
      <label-item label="IMPLEXPRNENC"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VLEXIMP"/>
      <label-item label="VSERPFCI"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VLEXIMP"/>
      <label-item label="VSERIPI"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VLEXIMP"/>
      <label-item label="VSERSUBJ"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VLEXIMP"/>
      <label-item label="VSERIMP"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VLEXIMP"/>
      <label-item label="IMPSERPRNENC"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VLEXIMP"/>
      <label-item label="VHABERPFCI"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VLEXIMP"/>
      <label-item label="VHABERIPI"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VLEXIMP"/>
      <label-item label="VHABERSUBJ"/>
    </label-sequence>
     <label-sequence>
      <label-item label="VSERIMP"/>
      <label-item label="VLEXPFCI"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VSERIMP"/>
      <label-item label="VLEXIPI"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VSERIMP"/>
      <label-item label="VLEXSUBJ"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VSERIMP"/>
      <label-item label="VLEXIMP"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VSERIMP"/>
      <label-item label="IMPLEXPRNENC"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VSERIMP"/>
      <label-item label="VSERPFCI"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VSERIMP"/>
      <label-item label="VSERIPI"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VSERIMP"/>
      <label-item label="VSERSUBJ"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VSERIMP"/>
      <label-item label="VSERIMP"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VSERIMP"/>
      <label-item label="IMPSERPRNENC"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VSERIMP"/>
      <label-item label="VHABERPFCI"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VSERIMP"/>
      <label-item label="VHABERIPI"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VSERIMP"/>
      <label-item label="VHABERSUBJ"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DET"/>
      <label-item label="SENT"/>
    </label-sequence>
    <!--
	<label-sequence>
      <label-item label="PREP"/>
      <label-item label="SENT"/>
    </label-sequence>
	-->
    <label-sequence>
      <label-item label="PREDET"/>
      <label-item label="SENT"/>
    </label-sequence>
    <label-sequence>
      <label-item label="REL"/>
      <label-item label="SENT"/>
    </label-sequence>
    <label-sequence>
      <label-item label="RELADV"/>
      <label-item label="SENT"/>
    </label-sequence>
    <label-sequence>
      <label-item label="CNJCOORD"/>
      <label-item label="SENT"/>
    </label-sequence>
    <label-sequence>
      <label-item label="CNJSUBS"/>
      <label-item label="SENT"/>
    </label-sequence>
    <label-sequence>
      <label-item label="CNJADV"/>
      <label-item label="SENT"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PREPDET"/>
      <label-item label="SENT"/>
    </label-sequence>
    <label-sequence>
      <label-item label="NOM"/>
      <label-item label="NOM"/>
    </label-sequence>
    <label-sequence>
      <label-item label="NOM"/>
      <label-item label="ACRONIMO"/>
    </label-sequence>
    <label-sequence>
      <label-item label="ACRONIMO"/>
      <label-item label="NOM"/>
    </label-sequence>
    <label-sequence>
      <label-item label="ACRONIMO"/>
      <label-item label="ACRONIMO"/>
    </label-sequence>
    <label-sequence>
      <label-item label="ANTROPONIM"/>
      <label-item label="VLEXIMP"/>
    </label-sequence>
    <label-sequence>
      <label-item label="TOPONIM"/>
      <label-item label="VLEXIMP"/>
    </label-sequence>
    <label-sequence>
      <label-item label="NPALTRES"/>
      <label-item label="VLEXIMP"/>
    </label-sequence>
    <label-sequence>
      <label-item label="ANTROPONIM"/>
      <label-item label="VSERIMP"/>
    </label-sequence>
    <label-sequence>
      <label-item label="TOPONIM"/>
      <label-item label="VSERIMP"/>
    </label-sequence>
    <label-sequence>
      <label-item label="NPALTRES"/>
      <label-item label="VSERIMP"/>
    </label-sequence>
    <label-sequence>
      <label-item label="ANTROPONIM"/>
      <label-item label="IMPLEXPRNENC"/>
    </label-sequence>
    <label-sequence>
      <label-item label="TOPONIM"/>
      <label-item label="IMPLEXPRNENC"/>
    </label-sequence>
    <label-sequence>
      <label-item label="NPALTRES"/>
      <label-item label="IMPLEXPRNENC"/>
    </label-sequence>
     <label-sequence>
      <label-item label="ANTROPONIM"/>
      <label-item label="IMPSERPRNENC"/>
    </label-sequence>
    <label-sequence>
      <label-item label="TOPONIM"/>
      <label-item label="IMPSERPRNENC"/>
    </label-sequence>
    <label-sequence>
      <label-item label="NPALTRES"/>
      <label-item label="IMPSERPRNENC"/>
    </label-sequence>
    <label-sequence>
      <label-item label="ANTROPONIM"/>
      <label-item label="NOM"/>
    </label-sequence>
    <label-sequence>
      <label-item label="TOPONIM"/>
      <label-item label="NOM"/>
    </label-sequence>
    <label-sequence>
      <label-item label="NPALTRES"/>
      <label-item label="NOM"/>
    </label-sequence>
    <label-sequence>
      <label-item label="ANTROPONIM"/>
      <label-item label="ACRONIMO"/>
    </label-sequence>
    <label-sequence>
      <label-item label="TOPONIM"/>
      <label-item label="ACRONIMO"/>
    </label-sequence>
    <label-sequence>
      <label-item label="NPALTRES"/>
      <label-item label="ACRONIMO"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PRNPRO"/>
      <label-item label="NOM"/>
    </label-sequence>	
	<label-sequence>
      <label-item label="PRNTN"/>
      <label-item label="NOM"/>
    </label-sequence>	
  </forbid>
  

   <enforce-rules>
    <enforce-after label="PRNPRO">
      <label-set>
        <label-item label="PRNPRO"/>
        <label-item label="VLEXPFCI"/>
        <label-item label="VLEXIPI"/>
        <label-item label="VLEXSUBJ"/>
        <label-item label="VSERPFCI"/>
        <label-item label="VSERIPI"/>
        <label-item label="VSERSUBJ"/>
        <label-item label="VHABER"/>		
        <label-item label="VHABERPFCI"/>
        <label-item label="VHABERIPI"/>
        <label-item label="VHABERSUBJ"/>
      </label-set>
    </enforce-after>
  </enforce-rules>


  <preferences>
   <!-- preferencias asturianas -->
   <!--<prefer tags="vblex.pri.p3.sg"/>-->
   <!--<prefer tags="vblex.ifi.p3.sg"/>-->
   <!-- fin preferencias asturianas -->  
   <prefer tags="vblex.pii.p3.sg"/>
   <prefer tags="vbser.pii.p3.sg"/>
   <prefer tags="vbhaver.pii.p3.sg"/>
   <prefer tags="vblex.prs.p3.sg"/>
   <prefer tags="vbser.prs.p3.sg"/>
   <prefer tags="vbhaver.prs.p3.sg"/>
   <prefer tags="vblex.cni.p3.sg"/>
   <prefer tags="vbser.cni.p3.sg"/>
   <prefer tags="vbhaver.cni.p3.sg"/>
   <prefer tags="vblex.pis.p3.sg"/>
   <prefer tags="vbser.pis.p3.sg"/>
   <prefer tags="vbhaver.pis.p3.sg"/>
   </preferences>

</tagger>
