#                                               -*- Autoconf -*-
# Process this file with autoconf to produce a configure script.


AC_PREREQ(2.52)

m4_define([required_apertium_version], [3.1.0])

AC_INIT([apertium-es-ast], [1.0.6], [jviejo@uniovi.es])
AM_INIT_AUTOMAKE([apertium-es-ast], [1.0.6], no-define)
AC_PROG_LN_S
AC_PROG_AWK
AC_CONFIG_HEADER([config])

AC_DEFUN([PKG_CHECK_APERTIUM], [
  APERTIUM_VER=0
  PKG_CHECK_MODULES(APERTIUM, apertium-1.0 >= 1.0.0,
  [
      APERTIUM_VER=10
  ],
  [
      PKG_CHECK_MODULES(APERTIUM, apertium-2.0 >= 2.0.0,
      [
          APERTIUM_VER=20
      ],
      [
          PKG_CHECK_MODULES(APERTIUM, apertium-3.0 >= 3.0.0,
          [
              APERTIUM_VER=30
          ],
          [
			PKG_CHECK_MODULES(APERTIUM, apertium-3.1 >= 3.1.0,
			[
				APERTIUM_VER=31
			],
			[
				PKG_CHECK_MODULES(APERTIUM, apertium-3.2 >= 3.2.0)
				APERTIUM_VER=32
			])
          ])
      ])
  ])
  AC_SUBST(APERTIUM_VER)
])




AC_CHECK_PROG(PN_RECOGNISER,apertium-pn-recogniser,yes,no)
      if test x$PN_RECOGNISER = xno
      then
        AC_MSG_ERROR([You don't have apertium-pn-recogniser installed.])
      fi                      
PKG_CHECK_APERTIUM


AC_SUBST(APERTIUM_VER)

AC_OUTPUT([Makefile])
