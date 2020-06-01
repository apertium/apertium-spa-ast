AC_PREREQ(2.52)

m4_define([required_apertium_version], [3.1.0])

AC_INIT([apertium-spa-ast], [1.1.0], [jviejo@uniovi.es])
AM_INIT_AUTOMAKE([apertium-spa-ast], [1.1.0], no-define)
AC_PROG_LN_S
AC_PROG_AWK
AC_CONFIG_HEADER([config])

PKG_CHECK_MODULES(APERTIUM,   apertium >= required_apertium_version, [], [PKG_CHECK_MODULES(APERTIUM,   apertium-3.4 >= required_apertium_version)])

AP_MKINCLUDE

AC_OUTPUT([Makefile])
