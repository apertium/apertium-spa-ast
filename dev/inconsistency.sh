TMPDIR=/tmp

if [[ $1 = "ast-es" ]]; then

lt-expand ../apertium-es-ast.ast.dix | grep -v REGEX | grep -v '<prn><enc>' | sed 's/:>:/%/g' | grep -v ':<:' | sed 's/:/%/g' | cut -f2 -d'%' |  sed 's/^/^/g' | sed 's/$/$ ^.<sent>$/g' | tee $TMPDIR/tmp_testvoc1.txt |
        apertium-pretransfer|
        apertium-transfer ../apertium-es-ast.ast-es.t1x  ../ast-es.t1x.bin  ../ast-es.autobil.bin | tee $TMPDIR/tmp_testvoc2.txt |
        lt-proc -d ../ast-es.autogen.bin > $TMPDIR/tmp_testvoc3.txt
paste -d _ $TMPDIR/tmp_testvoc1.txt $TMPDIR/tmp_testvoc2.txt $TMPDIR/tmp_testvoc3.txt | sed 's/\^.<sent>\$//g' | sed 's/_/   --------->  /g'

elif [[ $1 = "es-ast" ]]; then

lt-expand ../apertium-es-ast.es.dix | grep -v REGEX | grep -v '<prn><enc>' | sed 's/:>:/%/g' | grep -v ':<:' | sed 's/:/%/g' | cut -f2 -d'%' |  sed 's/^/^/g' | sed 's/$/$ ^.<sent>$/g' | tee $TMPDIR/tmp_testvoc1.txt |
        apertium-pretransfer|
        apertium-transfer ../apertium-es-ast.es-ast.t1x  ../es-ast.t1x.bin  ../es-ast.autobil.bin | tee $TMPDIR/tmp_testvoc2.txt |
        lt-proc -d ../es-ast.autogen.bin > $TMPDIR/tmp_testvoc3.txt
paste -d _ $TMPDIR/tmp_testvoc1.txt $TMPDIR/tmp_testvoc2.txt $TMPDIR/tmp_testvoc3.txt | sed 's/\^.<sent>\$//g' | sed 's/_/   --------->  /g'


else
	echo "sh inconsistency.sh <direction>";
fi
