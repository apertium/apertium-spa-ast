echo "==Spanish->Asturian==========================";
bash inconsistency.sh es-ast > /tmp/es-ast.testvoc; sh inconsistency-summary.sh /tmp/es-ast.testvoc es-ast
echo ""
echo "==Asturian->Spanish===========================";
bash inconsistency.sh ast-es > /tmp/ast-es.testvoc; bash inconsistency-summary.sh /tmp/ast-es.testvoc ast-es
