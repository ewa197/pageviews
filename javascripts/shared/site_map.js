/**
 * @file WMF [site matrix](https://www.mediawiki.org/w/api.php?action=sitematrix), with some unsupported wikis removed
 */

/**
 * Sitematrix of all supported WMF wikis
 * @type {Object}
 */
const siteMap = {
  'aawiki': 'aa.wikipedia.org',
  'aawikibooks': 'aa.wikibooks.org',
  'aawiktionary': 'aa.wiktionary.org',
  'abwiki': 'ab.wikipedia.org',
  'abwiktionary': 'ab.wiktionary.org',
  'acewiki': 'ace.wikipedia.org',
  'adywiki': 'ady.wikipedia.org',
  'afwiki': 'af.wikipedia.org',
  'afwikibooks': 'af.wikibooks.org',
  'afwikiquote': 'af.wikiquote.org',
  'afwiktionary': 'af.wiktionary.org',
  'akwiki': 'ak.wikipedia.org',
  'akwikibooks': 'ak.wikibooks.org',
  'akwiktionary': 'ak.wiktionary.org',
  'alswiki': 'als.wikipedia.org',
  'alswikibooks': 'als.wikibooks.org',
  'alswikiquote': 'als.wikiquote.org',
  'alswiktionary': 'als.wiktionary.org',
  'amwiki': 'am.wikipedia.org',
  'amwikimedia': 'am.wikimedia.org',
  'amwikiquote': 'am.wikiquote.org',
  'amwiktionary': 'am.wiktionary.org',
  'angwiki': 'ang.wikipedia.org',
  'angwikibooks': 'ang.wikibooks.org',
  'angwikiquote': 'ang.wikiquote.org',
  'angwikisource': 'ang.wikisource.org',
  'angwiktionary': 'ang.wiktionary.org',
  'anwiki': 'an.wikipedia.org',
  'anwiktionary': 'an.wiktionary.org',
  'arcwiki': 'arc.wikipedia.org',
  'arwiki': 'ar.wikipedia.org',
  'arwikibooks': 'ar.wikibooks.org',
  'arwikimedia': 'ar.wikimedia.org',
  'arwikinews': 'ar.wikinews.org',
  'arwikiquote': 'ar.wikiquote.org',
  'arwikisource': 'ar.wikisource.org',
  'arwikiversity': 'ar.wikiversity.org',
  'arwiktionary': 'ar.wiktionary.org',
  'arzwiki': 'arz.wikipedia.org',
  'astwiki': 'ast.wikipedia.org',
  'astwikibooks': 'ast.wikibooks.org',
  'astwikiquote': 'ast.wikiquote.org',
  'astwiktionary': 'ast.wiktionary.org',
  'aswiki': 'as.wikipedia.org',
  'aswikibooks': 'as.wikibooks.org',
  'aswikisource': 'as.wikisource.org',
  'aswiktionary': 'as.wiktionary.org',
  'atjwiki': 'atj.wikipedia.org',
  'avwiki': 'av.wikipedia.org',
  'avwiktionary': 'av.wiktionary.org',
  'aywiki': 'ay.wikipedia.org',
  'aywikibooks': 'ay.wikibooks.org',
  'aywiktionary': 'ay.wiktionary.org',
  'azbwiki': 'azb.wikipedia.org',
  'azwiki': 'az.wikipedia.org',
  'azwikibooks': 'az.wikibooks.org',
  'azwikiquote': 'az.wikiquote.org',
  'azwikisource': 'az.wikisource.org',
  'azwiktionary': 'az.wiktionary.org',
  'barwiki': 'bar.wikipedia.org',
  'bat_smgwiki': 'bat-smg.wikipedia.org',
  'bawiki': 'ba.wikipedia.org',
  'bawikibooks': 'ba.wikibooks.org',
  'bclwiki': 'bcl.wikipedia.org',
  'bdwikimedia': 'bd.wikimedia.org',
  'be_x_oldwiki': 'be-tarask.wikipedia.org',
  'betawikiversity': 'beta.wikiversity.org',
  'bewiki': 'be.wikipedia.org',
  'bewikibooks': 'be.wikibooks.org',
  'bewikimedia': 'be.wikimedia.org',
  'bewikiquote': 'be.wikiquote.org',
  'bewikisource': 'be.wikisource.org',
  'bewiktionary': 'be.wiktionary.org',
  'bgwiki': 'bg.wikipedia.org',
  'bgwikibooks': 'bg.wikibooks.org',
  'bgwikinews': 'bg.wikinews.org',
  'bgwikiquote': 'bg.wikiquote.org',
  'bgwikisource': 'bg.wikisource.org',
  'bgwiktionary': 'bg.wiktionary.org',
  'bhwiki': 'bh.wikipedia.org',
  'bhwiktionary': 'bh.wiktionary.org',
  'biwiki': 'bi.wikipedia.org',
  'biwikibooks': 'bi.wikibooks.org',
  'biwiktionary': 'bi.wiktionary.org',
  'bjnwiki': 'bjn.wikipedia.org',
  'bmwiki': 'bm.wikipedia.org',
  'bmwikibooks': 'bm.wikibooks.org',
  'bmwikiquote': 'bm.wikiquote.org',
  'bmwiktionary': 'bm.wiktionary.org',
  'bnwiki': 'bn.wikipedia.org',
  'bnwikibooks': 'bn.wikibooks.org',
  'bnwikisource': 'bn.wikisource.org',
  'bnwiktionary': 'bn.wiktionary.org',
  'bowiki': 'bo.wikipedia.org',
  'bowikibooks': 'bo.wikibooks.org',
  'bowiktionary': 'bo.wiktionary.org',
  'bpywiki': 'bpy.wikipedia.org',
  'brwiki': 'br.wikipedia.org',
  'brwikimedia': 'br.wikimedia.org',
  'brwikiquote': 'br.wikiquote.org',
  'brwikisource': 'br.wikisource.org',
  'brwiktionary': 'br.wiktionary.org',
  'bswiki': 'bs.wikipedia.org',
  'bswikibooks': 'bs.wikibooks.org',
  'bswikinews': 'bs.wikinews.org',
  'bswikiquote': 'bs.wikiquote.org',
  'bswikisource': 'bs.wikisource.org',
  'bswiktionary': 'bs.wiktionary.org',
  'bugwiki': 'bug.wikipedia.org',
  'bxrwiki': 'bxr.wikipedia.org',
  'cawiki': 'ca.wikipedia.org',
  'cawikibooks': 'ca.wikibooks.org',
  'cawikimedia': 'ca.wikimedia.org',
  'cawikinews': 'ca.wikinews.org',
  'cawikiquote': 'ca.wikiquote.org',
  'cawikisource': 'ca.wikisource.org',
  'cawiktionary': 'ca.wiktionary.org',
  'cbk_zamwiki': 'cbk-zam.wikipedia.org',
  'cdowiki': 'cdo.wikipedia.org',
  'cebwiki': 'ceb.wikipedia.org',
  'cewiki': 'ce.wikipedia.org',
  'chowiki': 'cho.wikipedia.org',
  'chrwiki': 'chr.wikipedia.org',
  'chrwiktionary': 'chr.wiktionary.org',
  'chwiki': 'ch.wikipedia.org',
  'chwikibooks': 'ch.wikibooks.org',
  'chwiktionary': 'ch.wiktionary.org',
  'chywiki': 'chy.wikipedia.org',
  'ckbwiki': 'ckb.wikipedia.org',
  'cnwikimedia': 'cn.wikimedia.org',
  'commonswiki': 'commons.wikimedia.org',
  'cowiki': 'co.wikipedia.org',
  'cowikibooks': 'co.wikibooks.org',
  'cowikimedia': 'co.wikimedia.org',
  'cowikiquote': 'co.wikiquote.org',
  'cowiktionary': 'co.wiktionary.org',
  'crhwiki': 'crh.wikipedia.org',
  'crwiki': 'cr.wikipedia.org',
  'crwikiquote': 'cr.wikiquote.org',
  'crwiktionary': 'cr.wiktionary.org',
  'csbwiki': 'csb.wikipedia.org',
  'csbwiktionary': 'csb.wiktionary.org',
  'cswiki': 'cs.wikipedia.org',
  'cswikibooks': 'cs.wikibooks.org',
  'cswikinews': 'cs.wikinews.org',
  'cswikiquote': 'cs.wikiquote.org',
  'cswikisource': 'cs.wikisource.org',
  'cswikiversity': 'cs.wikiversity.org',
  'cswiktionary': 'cs.wiktionary.org',
  'cuwiki': 'cu.wikipedia.org',
  'cvwiki': 'cv.wikipedia.org',
  'cvwikibooks': 'cv.wikibooks.org',
  'cywiki': 'cy.wikipedia.org',
  'cywikibooks': 'cy.wikibooks.org',
  'cywikiquote': 'cy.wikiquote.org',
  'cywikisource': 'cy.wikisource.org',
  'cywiktionary': 'cy.wiktionary.org',
  'dawiki': 'da.wikipedia.org',
  'dawikibooks': 'da.wikibooks.org',
  'dawikiquote': 'da.wikiquote.org',
  'dawikisource': 'da.wikisource.org',
  'dawiktionary': 'da.wiktionary.org',
  'dewiki': 'de.wikipedia.org',
  'dewikibooks': 'de.wikibooks.org',
  'dewikinews': 'de.wikinews.org',
  'dewikiquote': 'de.wikiquote.org',
  'dewikisource': 'de.wikisource.org',
  'dewikiversity': 'de.wikiversity.org',
  'dewikivoyage': 'de.wikivoyage.org',
  'dewiktionary': 'de.wiktionary.org',
  'dinwiki': 'din.wikipedia.org',
  'diqwiki': 'diq.wikipedia.org',
  'dkwikimedia': 'dk.wikimedia.org',
  'dsbwiki': 'dsb.wikipedia.org',
  'dtywiki': 'dty.wikipedia.org',
  'dvwiki': 'dv.wikipedia.org',
  'dvwiktionary': 'dv.wiktionary.org',
  'dzwiki': 'dz.wikipedia.org',
  'dzwiktionary': 'dz.wiktionary.org',
  'eewiki': 'ee.wikipedia.org',
  'elwiki': 'el.wikipedia.org',
  'elwikibooks': 'el.wikibooks.org',
  'elwikinews': 'el.wikinews.org',
  'elwikiquote': 'el.wikiquote.org',
  'elwikisource': 'el.wikisource.org',
  'elwikiversity': 'el.wikiversity.org',
  'elwikivoyage': 'el.wikivoyage.org',
  'elwiktionary': 'el.wiktionary.org',
  'emlwiki': 'eml.wikipedia.org',
  'enwiki': 'en.wikipedia.org',
  'enwikibooks': 'en.wikibooks.org',
  'enwikinews': 'en.wikinews.org',
  'enwikiquote': 'en.wikiquote.org',
  'enwikisource': 'en.wikisource.org',
  'enwikiversity': 'en.wikiversity.org',
  'enwikivoyage': 'en.wikivoyage.org',
  'enwiktionary': 'en.wiktionary.org',
  'eowiki': 'eo.wikipedia.org',
  'eowikibooks': 'eo.wikibooks.org',
  'eowikinews': 'eo.wikinews.org',
  'eowikiquote': 'eo.wikiquote.org',
  'eowikisource': 'eo.wikisource.org',
  'eowiktionary': 'eo.wiktionary.org',
  'eswiki': 'es.wikipedia.org',
  'eswikibooks': 'es.wikibooks.org',
  'eswikinews': 'es.wikinews.org',
  'eswikiquote': 'es.wikiquote.org',
  'eswikisource': 'es.wikisource.org',
  'eswikiversity': 'es.wikiversity.org',
  'eswikivoyage': 'es.wikivoyage.org',
  'eswiktionary': 'es.wiktionary.org',
  'etwiki': 'et.wikipedia.org',
  'etwikibooks': 'et.wikibooks.org',
  'etwikimedia': 'ee.wikimedia.org',
  'etwikiquote': 'et.wikiquote.org',
  'etwikisource': 'et.wikisource.org',
  'etwiktionary': 'et.wiktionary.org',
  'euwiki': 'eu.wikipedia.org',
  'euwikibooks': 'eu.wikibooks.org',
  'euwikiquote': 'eu.wikiquote.org',
  'euwikisource': 'eu.wikisource.org',
  'euwiktionary': 'eu.wiktionary.org',
  'extwiki': 'ext.wikipedia.org',
  'fawiki': 'fa.wikipedia.org',
  'fawikibooks': 'fa.wikibooks.org',
  'fawikinews': 'fa.wikinews.org',
  'fawikiquote': 'fa.wikiquote.org',
  'fawikisource': 'fa.wikisource.org',
  'fawikivoyage': 'fa.wikivoyage.org',
  'fawiktionary': 'fa.wiktionary.org',
  'ffwiki': 'ff.wikipedia.org',
  'fiu_vrowiki': 'fiu-vro.wikipedia.org',
  'fiwiki': 'fi.wikipedia.org',
  'fiwikibooks': 'fi.wikibooks.org',
  'fiwikimedia': 'fi.wikimedia.org',
  'fiwikinews': 'fi.wikinews.org',
  'fiwikiquote': 'fi.wikiquote.org',
  'fiwikisource': 'fi.wikisource.org',
  'fiwikiversity': 'fi.wikiversity.org',
  'fiwikivoyage': 'fi.wikivoyage.org',
  'fiwiktionary': 'fi.wiktionary.org',
  'fjwiki': 'fj.wikipedia.org',
  'fjwiktionary': 'fj.wiktionary.org',
  'foundationwiki': 'wikimediafoundation.org',
  'fowiki': 'fo.wikipedia.org',
  'fowikisource': 'fo.wikisource.org',
  'fowiktionary': 'fo.wiktionary.org',
  'frpwiki': 'frp.wikipedia.org',
  'frrwiki': 'frr.wikipedia.org',
  'frwiki': 'fr.wikipedia.org',
  'frwikibooks': 'fr.wikibooks.org',
  'frwikinews': 'fr.wikinews.org',
  'frwikiquote': 'fr.wikiquote.org',
  'frwikisource': 'fr.wikisource.org',
  'frwikiversity': 'fr.wikiversity.org',
  'frwikivoyage': 'fr.wikivoyage.org',
  'frwiktionary': 'fr.wiktionary.org',
  'furwiki': 'fur.wikipedia.org',
  'fywiki': 'fy.wikipedia.org',
  'fywikibooks': 'fy.wikibooks.org',
  'fywiktionary': 'fy.wiktionary.org',
  'gagwiki': 'gag.wikipedia.org',
  'ganwiki': 'gan.wikipedia.org',
  'gawiki': 'ga.wikipedia.org',
  'gawikibooks': 'ga.wikibooks.org',
  'gawikiquote': 'ga.wikiquote.org',
  'gawiktionary': 'ga.wiktionary.org',
  'gdwiki': 'gd.wikipedia.org',
  'gdwiktionary': 'gd.wiktionary.org',
  'glkwiki': 'glk.wikipedia.org',
  'glwiki': 'gl.wikipedia.org',
  'glwikibooks': 'gl.wikibooks.org',
  'glwikiquote': 'gl.wikiquote.org',
  'glwikisource': 'gl.wikisource.org',
  'glwiktionary': 'gl.wiktionary.org',
  'gnwiki': 'gn.wikipedia.org',
  'gnwikibooks': 'gn.wikibooks.org',
  'gnwiktionary': 'gn.wiktionary.org',
  'gomwiki': 'gom.wikipedia.org',
  'gorwiki': 'gor.wikipedia.org',
  'gotwiki': 'got.wikipedia.org',
  'gotwikibooks': 'got.wikibooks.org',
  'guwiki': 'gu.wikipedia.org',
  'guwikibooks': 'gu.wikibooks.org',
  'guwikiquote': 'gu.wikiquote.org',
  'guwikisource': 'gu.wikisource.org',
  'guwiktionary': 'gu.wiktionary.org',
  'gvwiki': 'gv.wikipedia.org',
  'gvwiktionary': 'gv.wiktionary.org',
  'hakwiki': 'hak.wikipedia.org',
  'hawiki': 'ha.wikipedia.org',
  'hawiktionary': 'ha.wiktionary.org',
  'hawwiki': 'haw.wikipedia.org',
  'hewiki': 'he.wikipedia.org',
  'hewikibooks': 'he.wikibooks.org',
  'hewikinews': 'he.wikinews.org',
  'hewikiquote': 'he.wikiquote.org',
  'hewikisource': 'he.wikisource.org',
  'hewikivoyage': 'he.wikivoyage.org',
  'hewiktionary': 'he.wiktionary.org',
  'hifwiki': 'hif.wikipedia.org',
  'hifwiktionary': 'hif.wiktionary.org',
  'hiwiki': 'hi.wikipedia.org',
  'hiwikimedia': 'hi.wikimedia.org',
  'hiwikibooks': 'hi.wikibooks.org',
  'hiwikiquote': 'hi.wikiquote.org',
  'hiwikiversity': 'hi.wikiversity.org',
  'hiwikivoyage': 'hi.wikivoyage.org',
  'hiwiktionary': 'hi.wiktionary.org',
  'howiki': 'ho.wikipedia.org',
  'hrwiki': 'hr.wikipedia.org',
  'hrwikibooks': 'hr.wikibooks.org',
  'hrwikiquote': 'hr.wikiquote.org',
  'hrwikisource': 'hr.wikisource.org',
  'hrwiktionary': 'hr.wiktionary.org',
  'hsbwiki': 'hsb.wikipedia.org',
  'hsbwiktionary': 'hsb.wiktionary.org',
  'htwiki': 'ht.wikipedia.org',
  'htwikisource': 'ht.wikisource.org',
  'huwiki': 'hu.wikipedia.org',
  'huwikibooks': 'hu.wikibooks.org',
  'huwikinews': 'hu.wikinews.org',
  'huwikiquote': 'hu.wikiquote.org',
  'huwikisource': 'hu.wikisource.org',
  'huwiktionary': 'hu.wiktionary.org',
  'hywiki': 'hy.wikipedia.org',
  'hywikibooks': 'hy.wikibooks.org',
  'hywikiquote': 'hy.wikiquote.org',
  'hywikisource': 'hy.wikisource.org',
  'hywiktionary': 'hy.wiktionary.org',
  'hzwiki': 'hz.wikipedia.org',
  'iawiki': 'ia.wikipedia.org',
  'iawikibooks': 'ia.wikibooks.org',
  'iawiktionary': 'ia.wiktionary.org',
  'idwiki': 'id.wikipedia.org',
  'idwikibooks': 'id.wikibooks.org',
  'idwikiquote': 'id.wikiquote.org',
  'idwikisource': 'id.wikisource.org',
  'idwiktionary': 'id.wiktionary.org',
  'iegcomwiki': 'iegcom.wikimedia.org',
  'iewiki': 'ie.wikipedia.org',
  'iewikibooks': 'ie.wikibooks.org',
  'iewiktionary': 'ie.wiktionary.org',
  'igwiki': 'ig.wikipedia.org',
  'iiwiki': 'ii.wikipedia.org',
  'ikwiki': 'ik.wikipedia.org',
  'ikwiktionary': 'ik.wiktionary.org',
  'ilowiki': 'ilo.wikipedia.org',
  'ilwikimedia': 'il.wikimedia.org',
  'incubatorwiki': 'incubator.wikimedia.org',
  'inhwiki': 'inh.wikipedia.org',
  'iowiki': 'io.wikipedia.org',
  'iowiktionary': 'io.wiktionary.org',
  'iswiki': 'is.wikipedia.org',
  'iswikibooks': 'is.wikibooks.org',
  'iswikiquote': 'is.wikiquote.org',
  'iswikisource': 'is.wikisource.org',
  'iswiktionary': 'is.wiktionary.org',
  'itwiki': 'it.wikipedia.org',
  'itwikibooks': 'it.wikibooks.org',
  'itwikinews': 'it.wikinews.org',
  'itwikiquote': 'it.wikiquote.org',
  'itwikisource': 'it.wikisource.org',
  'itwikiversity': 'it.wikiversity.org',
  'itwikivoyage': 'it.wikivoyage.org',
  'itwiktionary': 'it.wiktionary.org',
  'iuwiki': 'iu.wikipedia.org',
  'iuwiktionary': 'iu.wiktionary.org',
  'jamwiki': 'jam.wikipedia.org',
  'jawiki': 'ja.wikipedia.org',
  'jawikibooks': 'ja.wikibooks.org',
  'jawikinews': 'ja.wikinews.org',
  'jawikiquote': 'ja.wikiquote.org',
  'jawikisource': 'ja.wikisource.org',
  'jawikiversity': 'ja.wikiversity.org',
  'jawiktionary': 'ja.wiktionary.org',
  'jbowiki': 'jbo.wikipedia.org',
  'jbowiktionary': 'jbo.wiktionary.org',
  'jvwiki': 'jv.wikipedia.org',
  'jvwiktionary': 'jv.wiktionary.org',
  'kaawiki': 'kaa.wikipedia.org',
  'kabwiki': 'kab.wikipedia.org',
  'kawiki': 'ka.wikipedia.org',
  'kawikibooks': 'ka.wikibooks.org',
  'kawikiquote': 'ka.wikiquote.org',
  'kawiktionary': 'ka.wiktionary.org',
  'kbdwiki': 'kbd.wikipedia.org',
  'kgwiki': 'kg.wikipedia.org',
  'kiwiki': 'ki.wikipedia.org',
  'kjwiki': 'kj.wikipedia.org',
  'kkwiki': 'kk.wikipedia.org',
  'kkwikibooks': 'kk.wikibooks.org',
  'kkwikiquote': 'kk.wikiquote.org',
  'kkwiktionary': 'kk.wiktionary.org',
  'klwiki': 'kl.wikipedia.org',
  'klwiktionary': 'kl.wiktionary.org',
  'kmwiki': 'km.wikipedia.org',
  'kmwikibooks': 'km.wikibooks.org',
  'kmwiktionary': 'km.wiktionary.org',
  'knwiki': 'kn.wikipedia.org',
  'knwikibooks': 'kn.wikibooks.org',
  'knwikiquote': 'kn.wikiquote.org',
  'knwikisource': 'kn.wikisource.org',
  'knwiktionary': 'kn.wiktionary.org',
  'koiwiki': 'koi.wikipedia.org',
  'kowiki': 'ko.wikipedia.org',
  'kowikibooks': 'ko.wikibooks.org',
  'kowikinews': 'ko.wikinews.org',
  'kowikiquote': 'ko.wikiquote.org',
  'kowikisource': 'ko.wikisource.org',
  'kowikiversity': 'ko.wikiversity.org',
  'kowiktionary': 'ko.wiktionary.org',
  'kbpwiki': 'kbp.wikipedia.org',
  'krcwiki': 'krc.wikipedia.org',
  'krwiki': 'kr.wikipedia.org',
  'krwikiquote': 'kr.wikiquote.org',
  'kshwiki': 'ksh.wikipedia.org',
  'kswiki': 'ks.wikipedia.org',
  'kswikibooks': 'ks.wikibooks.org',
  'kswikiquote': 'ks.wikiquote.org',
  'kswiktionary': 'ks.wiktionary.org',
  'kuwiki': 'ku.wikipedia.org',
  'kuwikibooks': 'ku.wikibooks.org',
  'kuwikiquote': 'ku.wikiquote.org',
  'kuwiktionary': 'ku.wiktionary.org',
  'kvwiki': 'kv.wikipedia.org',
  'kwwiki': 'kw.wikipedia.org',
  'kwwikiquote': 'kw.wikiquote.org',
  'kwwiktionary': 'kw.wiktionary.org',
  'kywiki': 'ky.wikipedia.org',
  'kywikibooks': 'ky.wikibooks.org',
  'kywikiquote': 'ky.wikiquote.org',
  'kywiktionary': 'ky.wiktionary.org',
  'labswiki': 'wikitech.wikimedia.org',
  'ladwiki': 'lad.wikipedia.org',
  'lawiki': 'la.wikipedia.org',
  'lawikibooks': 'la.wikibooks.org',
  'lawikiquote': 'la.wikiquote.org',
  'lawikisource': 'la.wikisource.org',
  'lawiktionary': 'la.wiktionary.org',
  'lbewiki': 'lbe.wikipedia.org',
  'lbwiki': 'lb.wikipedia.org',
  'lbwikibooks': 'lb.wikibooks.org',
  'lbwikiquote': 'lb.wikiquote.org',
  'lbwiktionary': 'lb.wiktionary.org',
  'lezwiki': 'lez.wikipedia.org',
  'lfnwiki': 'lfn.wikipedia.org',
  'lgwiki': 'lg.wikipedia.org',
  'lijwiki': 'lij.wikipedia.org',
  'liwiki': 'li.wikipedia.org',
  'liwikibooks': 'li.wikibooks.org',
  'liwikiquote': 'li.wikiquote.org',
  'liwikisource': 'li.wikisource.org',
  'liwiktionary': 'li.wiktionary.org',
  'lmowiki': 'lmo.wikipedia.org',
  'lnwiki': 'ln.wikipedia.org',
  'lnwikibooks': 'ln.wikibooks.org',
  'lnwiktionary': 'ln.wiktionary.org',
  'loginwiki': 'login.wikimedia.org',
  'lowiki': 'lo.wikipedia.org',
  'lowiktionary': 'lo.wiktionary.org',
  'lrcwiki': 'lrc.wikipedia.org',
  'ltgwiki': 'ltg.wikipedia.org',
  'ltwiki': 'lt.wikipedia.org',
  'ltwikibooks': 'lt.wikibooks.org',
  'ltwikiquote': 'lt.wikiquote.org',
  'ltwikisource': 'lt.wikisource.org',
  'ltwiktionary': 'lt.wiktionary.org',
  'lvwiki': 'lv.wikipedia.org',
  'lvwikibooks': 'lv.wikibooks.org',
  'lvwiktionary': 'lv.wiktionary.org',
  'maiwiki': 'mai.wikipedia.org',
  'maiwikimedia': 'mai.wikimedia.org',
  'map_bmswiki': 'map-bms.wikipedia.org',
  'mdfwiki': 'mdf.wikipedia.org',
  'mediawikiwiki': 'mediawiki.org',
  'metawiki': 'meta.wikimedia.org',
  'mgwiki': 'mg.wikipedia.org',
  'mgwikibooks': 'mg.wikibooks.org',
  'mgwiktionary': 'mg.wiktionary.org',
  'mhrwiki': 'mhr.wikipedia.org',
  'mhwiki': 'mh.wikipedia.org',
  'mhwiktionary': 'mh.wiktionary.org',
  'minwiki': 'min.wikipedia.org',
  'miwiki': 'mi.wikipedia.org',
  'miwikibooks': 'mi.wikibooks.org',
  'miwiktionary': 'mi.wiktionary.org',
  'mkwiki': 'mk.wikipedia.org',
  'mkwikibooks': 'mk.wikibooks.org',
  'mkwikimedia': 'mk.wikimedia.org',
  'mkwikisource': 'mk.wikisource.org',
  'mkwiktionary': 'mk.wiktionary.org',
  'mlwiki': 'ml.wikipedia.org',
  'mlwikibooks': 'ml.wikibooks.org',
  'mlwikiquote': 'ml.wikiquote.org',
  'mlwikisource': 'ml.wikisource.org',
  'mlwiktionary': 'ml.wiktionary.org',
  'mnwiki': 'mn.wikipedia.org',
  'mnwikibooks': 'mn.wikibooks.org',
  'mnwiktionary': 'mn.wiktionary.org',
  'mowiki': 'mo.wikipedia.org',
  'mowiktionary': 'mo.wiktionary.org',
  'mrjwiki': 'mrj.wikipedia.org',
  'mrwiki': 'mr.wikipedia.org',
  'mrwikibooks': 'mr.wikibooks.org',
  'mrwikiquote': 'mr.wikiquote.org',
  'mrwikisource': 'mr.wikisource.org',
  'mrwiktionary': 'mr.wiktionary.org',
  'mswiki': 'ms.wikipedia.org',
  'mswikibooks': 'ms.wikibooks.org',
  'mswiktionary': 'ms.wiktionary.org',
  'mtwiki': 'mt.wikipedia.org',
  'mtwiktionary': 'mt.wiktionary.org',
  'muswiki': 'mus.wikipedia.org',
  'mwlwiki': 'mwl.wikipedia.org',
  'mxwikimedia': 'mx.wikimedia.org',
  'myvwiki': 'myv.wikipedia.org',
  'mywiki': 'my.wikipedia.org',
  'mywikibooks': 'my.wikibooks.org',
  'mywiktionary': 'my.wiktionary.org',
  'mznwiki': 'mzn.wikipedia.org',
  'nahwiki': 'nah.wikipedia.org',
  'nahwikibooks': 'nah.wikibooks.org',
  'nahwiktionary': 'nah.wiktionary.org',
  'napwiki': 'nap.wikipedia.org',
  'nawiki': 'na.wikipedia.org',
  'nawikibooks': 'na.wikibooks.org',
  'nawikiquote': 'na.wikiquote.org',
  'nawiktionary': 'na.wiktionary.org',
  'nds_nlwiki': 'nds-nl.wikipedia.org',
  'ndswiki': 'nds.wikipedia.org',
  'ndswikibooks': 'nds.wikibooks.org',
  'ndswikiquote': 'nds.wikiquote.org',
  'ndswiktionary': 'nds.wiktionary.org',
  'newiki': 'ne.wikipedia.org',
  'newikibooks': 'ne.wikibooks.org',
  'newiktionary': 'ne.wiktionary.org',
  'newwiki': 'new.wikipedia.org',
  'ngwiki': 'ng.wikipedia.org',
  'nlwiki': 'nl.wikipedia.org',
  'nlwikibooks': 'nl.wikibooks.org',
  'nlwikimedia': 'nl.wikimedia.org',
  'nlwikinews': 'nl.wikinews.org',
  'nlwikiquote': 'nl.wikiquote.org',
  'nlwikisource': 'nl.wikisource.org',
  'nlwikivoyage': 'nl.wikivoyage.org',
  'nlwiktionary': 'nl.wiktionary.org',
  'nnwiki': 'nn.wikipedia.org',
  'nnwikiquote': 'nn.wikiquote.org',
  'nnwiktionary': 'nn.wiktionary.org',
  'nostalgiawiki': 'nostalgia.wikipedia.org',
  'novwiki': 'nov.wikipedia.org',
  'nowiki': 'no.wikipedia.org',
  'nowikibooks': 'no.wikibooks.org',
  'nowikimedia': 'no.wikimedia.org',
  'nowikinews': 'no.wikinews.org',
  'nowikiquote': 'no.wikiquote.org',
  'nowikisource': 'no.wikisource.org',
  'nowiktionary': 'no.wiktionary.org',
  'nrmwiki': 'nrm.wikipedia.org',
  'nsowiki': 'nso.wikipedia.org',
  'nvwiki': 'nv.wikipedia.org',
  'nycwikimedia': 'nyc.wikimedia.org',
  'nywiki': 'ny.wikipedia.org',
  'nzwikimedia': 'nz.wikimedia.org',
  'ocwiki': 'oc.wikipedia.org',
  'ocwikibooks': 'oc.wikibooks.org',
  'ocwiktionary': 'oc.wiktionary.org',
  'olowiki': 'olo.wikipedia.org',
  'omwiki': 'om.wikipedia.org',
  'omwiktionary': 'om.wiktionary.org',
  'orwiki': 'or.wikipedia.org',
  'orwikisource': 'or.wikisource.org',
  'orwiktionary': 'or.wiktionary.org',
  'oswiki': 'os.wikipedia.org',
  'outreachwiki': 'outreach.wikimedia.org',
  'pa_uswikimedia': 'pa-us.wikimedia.org',
  'pagwiki': 'pag.wikipedia.org',
  'pamwiki': 'pam.wikipedia.org',
  'papwiki': 'pap.wikipedia.org',
  'pawiki': 'pa.wikipedia.org',
  'pawikibooks': 'pa.wikibooks.org',
  'pawikisource': 'pa.wikisource.org',
  'pawiktionary': 'pa.wiktionary.org',
  'pcdwiki': 'pcd.wikipedia.org',
  'pdcwiki': 'pdc.wikipedia.org',
  'pflwiki': 'pfl.wikipedia.org',
  'pihwiki': 'pih.wikipedia.org',
  'piwiki': 'pi.wikipedia.org',
  'piwiktionary': 'pi.wiktionary.org',
  'plwiki': 'pl.wikipedia.org',
  'plwikibooks': 'pl.wikibooks.org',
  'plwikimedia': 'pl.wikimedia.org',
  'plwikinews': 'pl.wikinews.org',
  'plwikiquote': 'pl.wikiquote.org',
  'plwikisource': 'pl.wikisource.org',
  'plwikivoyage': 'pl.wikivoyage.org',
  'plwiktionary': 'pl.wiktionary.org',
  'pmswiki': 'pms.wikipedia.org',
  'pnbwiki': 'pnb.wikipedia.org',
  'pnbwiktionary': 'pnb.wiktionary.org',
  'pntwiki': 'pnt.wikipedia.org',
  'pswiki': 'ps.wikipedia.org',
  'pswikibooks': 'ps.wikibooks.org',
  'pswiktionary': 'ps.wiktionary.org',
  'ptwiki': 'pt.wikipedia.org',
  'ptwikibooks': 'pt.wikibooks.org',
  'ptwikimedia': 'pt.wikimedia.org',
  'ptwikinews': 'pt.wikinews.org',
  'ptwikiquote': 'pt.wikiquote.org',
  'ptwikisource': 'pt.wikisource.org',
  'ptwikiversity': 'pt.wikiversity.org',
  'ptwikivoyage': 'pt.wikivoyage.org',
  'ptwiktionary': 'pt.wiktionary.org',
  'quwiki': 'qu.wikipedia.org',
  'quwikibooks': 'qu.wikibooks.org',
  'quwikiquote': 'qu.wikiquote.org',
  'quwiktionary': 'qu.wiktionary.org',
  'rmwiki': 'rm.wikipedia.org',
  'rmwikibooks': 'rm.wikibooks.org',
  'rmwiktionary': 'rm.wiktionary.org',
  'rmywiki': 'rmy.wikipedia.org',
  'rnwiki': 'rn.wikipedia.org',
  'rnwiktionary': 'rn.wiktionary.org',
  'roa_rupwiki': 'roa-rup.wikipedia.org',
  'roa_rupwiktionary': 'roa-rup.wiktionary.org',
  'roa_tarawiki': 'roa-tara.wikipedia.org',
  'rowiki': 'ro.wikipedia.org',
  'rowikibooks': 'ro.wikibooks.org',
  'rowikinews': 'ro.wikinews.org',
  'rowikiquote': 'ro.wikiquote.org',
  'rowikisource': 'ro.wikisource.org',
  'rowikivoyage': 'ro.wikivoyage.org',
  'rowiktionary': 'ro.wiktionary.org',
  'rswikimedia': 'rs.wikimedia.org',
  'ruewiki': 'rue.wikipedia.org',
  'ruwiki': 'ru.wikipedia.org',
  'ruwikibooks': 'ru.wikibooks.org',
  'ruwikimedia': 'ru.wikimedia.org',
  'ruwikinews': 'ru.wikinews.org',
  'ruwikiquote': 'ru.wikiquote.org',
  'ruwikisource': 'ru.wikisource.org',
  'ruwikiversity': 'ru.wikiversity.org',
  'ruwikivoyage': 'ru.wikivoyage.org',
  'ruwiktionary': 'ru.wiktionary.org',
  'rwwiki': 'rw.wikipedia.org',
  'rwwiktionary': 'rw.wiktionary.org',
  'sahwiki': 'sah.wikipedia.org',
  'sahwikisource': 'sah.wikisource.org',
  'satwikipedia': 'sat.wikipedia.org',
  'sawiki': 'sa.wikipedia.org',
  'sawikibooks': 'sa.wikibooks.org',
  'sawikiquote': 'sa.wikiquote.org',
  'sawikisource': 'sa.wikisource.org',
  'sawiktionary': 'sa.wiktionary.org',
  'scnwiki': 'scn.wikipedia.org',
  'scnwiktionary': 'scn.wiktionary.org',
  'scowiki': 'sco.wikipedia.org',
  'scwiki': 'sc.wikipedia.org',
  'scwiktionary': 'sc.wiktionary.org',
  'sdwiki': 'sd.wikipedia.org',
  'sdwikinews': 'sd.wikinews.org',
  'sdwiktionary': 'sd.wiktionary.org',
  'sewiki': 'se.wikipedia.org',
  'sewikibooks': 'se.wikibooks.org',
  'sewikimedia': 'se.wikimedia.org',
  'sgwiki': 'sg.wikipedia.org',
  'sgwiktionary': 'sg.wiktionary.org',
  'shwiki': 'sh.wikipedia.org',
  'shwiktionary': 'sh.wiktionary.org',
  'simplewiki': 'simple.wikipedia.org',
  'simplewikibooks': 'simple.wikibooks.org',
  'simplewikiquote': 'simple.wikiquote.org',
  'simplewiktionary': 'simple.wiktionary.org',
  'siwiki': 'si.wikipedia.org',
  'siwikibooks': 'si.wikibooks.org',
  'siwiktionary': 'si.wiktionary.org',
  'skwiki': 'sk.wikipedia.org',
  'skwikibooks': 'sk.wikibooks.org',
  'skwikiquote': 'sk.wikiquote.org',
  'skwikisource': 'sk.wikisource.org',
  'skwiktionary': 'sk.wiktionary.org',
  'slwiki': 'sl.wikipedia.org',
  'slwikibooks': 'sl.wikibooks.org',
  'slwikiquote': 'sl.wikiquote.org',
  'slwikisource': 'sl.wikisource.org',
  'slwikiversity': 'sl.wikiversity.org',
  'slwiktionary': 'sl.wiktionary.org',
  'smwiki': 'sm.wikipedia.org',
  'smwiktionary': 'sm.wiktionary.org',
  'snwiki': 'sn.wikipedia.org',
  'snwiktionary': 'sn.wiktionary.org',
  'sourceswiki': 'wikisource.org',
  'sowiki': 'so.wikipedia.org',
  'sowiktionary': 'so.wiktionary.org',
  'specieswiki': 'species.wikimedia.org',
  'sqwiki': 'sq.wikipedia.org',
  'sqwikibooks': 'sq.wikibooks.org',
  'sqwikinews': 'sq.wikinews.org',
  'sqwikiquote': 'sq.wikiquote.org',
  'sqwiktionary': 'sq.wiktionary.org',
  'srnwiki': 'srn.wikipedia.org',
  'srwiki': 'sr.wikipedia.org',
  'srwikibooks': 'sr.wikibooks.org',
  'srwikinews': 'sr.wikinews.org',
  'srwikiquote': 'sr.wikiquote.org',
  'srwikisource': 'sr.wikisource.org',
  'srwiktionary': 'sr.wiktionary.org',
  'sswiki': 'ss.wikipedia.org',
  'sswiktionary': 'ss.wiktionary.org',
  'stqwiki': 'stq.wikipedia.org',
  'stwiki': 'st.wikipedia.org',
  'stwiktionary': 'st.wiktionary.org',
  'suwiki': 'su.wikipedia.org',
  'suwikibooks': 'su.wikibooks.org',
  'suwikiquote': 'su.wikiquote.org',
  'suwiktionary': 'su.wiktionary.org',
  'svwiki': 'sv.wikipedia.org',
  'svwikibooks': 'sv.wikibooks.org',
  'svwikinews': 'sv.wikinews.org',
  'svwikiquote': 'sv.wikiquote.org',
  'svwikisource': 'sv.wikisource.org',
  'svwikiversity': 'sv.wikiversity.org',
  'svwikivoyage': 'sv.wikivoyage.org',
  'svwiktionary': 'sv.wiktionary.org',
  'swwiki': 'sw.wikipedia.org',
  'swwikibooks': 'sw.wikibooks.org',
  'swwiktionary': 'sw.wiktionary.org',
  'szlwiki': 'szl.wikipedia.org',
  'tawiki': 'ta.wikipedia.org',
  'tawikibooks': 'ta.wikibooks.org',
  'tawikinews': 'ta.wikinews.org',
  'tawikiquote': 'ta.wikiquote.org',
  'tawikisource': 'ta.wikisource.org',
  'tawiktionary': 'ta.wiktionary.org',
  'tcywiki': 'tcy.wikipedia.org',
  'testwiki': 'test.wikipedia.org',
  'test2wiki': 'test2.wikipedia.org',
  'tetwiki': 'tet.wikipedia.org',
  'tewiki': 'te.wikipedia.org',
  'tewikibooks': 'te.wikibooks.org',
  'tewikiquote': 'te.wikiquote.org',
  'tewikisource': 'te.wikisource.org',
  'tewiktionary': 'te.wiktionary.org',
  'tgwiki': 'tg.wikipedia.org',
  'tgwikibooks': 'tg.wikibooks.org',
  'tgwiktionary': 'tg.wiktionary.org',
  'thwiki': 'th.wikipedia.org',
  'thwikibooks': 'th.wikibooks.org',
  'thwikinews': 'th.wikinews.org',
  'thwikiquote': 'th.wikiquote.org',
  'thwikisource': 'th.wikisource.org',
  'thwiktionary': 'th.wiktionary.org',
  'tiwiki': 'ti.wikipedia.org',
  'tiwiktionary': 'ti.wiktionary.org',
  'tkwiki': 'tk.wikipedia.org',
  'tkwikibooks': 'tk.wikibooks.org',
  'tkwikiquote': 'tk.wikiquote.org',
  'tkwiktionary': 'tk.wiktionary.org',
  'tlwiki': 'tl.wikipedia.org',
  'tlwikibooks': 'tl.wikibooks.org',
  'tlwiktionary': 'tl.wiktionary.org',
  'tnwiki': 'tn.wikipedia.org',
  'tnwiktionary': 'tn.wiktionary.org',
  'towiki': 'to.wikipedia.org',
  'towiktionary': 'to.wiktionary.org',
  'tpiwiki': 'tpi.wikipedia.org',
  'tpiwiktionary': 'tpi.wiktionary.org',
  'trwiki': 'tr.wikipedia.org',
  'trwikibooks': 'tr.wikibooks.org',
  'trwikimedia': 'tr.wikimedia.org',
  'trwikinews': 'tr.wikinews.org',
  'trwikiquote': 'tr.wikiquote.org',
  'trwikisource': 'tr.wikisource.org',
  'trwiktionary': 'tr.wiktionary.org',
  'tswiki': 'ts.wikipedia.org',
  'tswiktionary': 'ts.wiktionary.org',
  'ttwiki': 'tt.wikipedia.org',
  'ttwikibooks': 'tt.wikibooks.org',
  'ttwikiquote': 'tt.wikiquote.org',
  'ttwiktionary': 'tt.wiktionary.org',
  'tumwiki': 'tum.wikipedia.org',
  'twwiki': 'tw.wikipedia.org',
  'twwiktionary': 'tw.wiktionary.org',
  'tyvwiki': 'tyv.wikipedia.org',
  'tywiki': 'ty.wikipedia.org',
  'uawikimedia': 'ua.wikimedia.org',
  'udmwiki': 'udm.wikipedia.org',
  'ugwiki': 'ug.wikipedia.org',
  'ugwikibooks': 'ug.wikibooks.org',
  'ugwikiquote': 'ug.wikiquote.org',
  'ugwiktionary': 'ug.wiktionary.org',
  'ukwiki': 'uk.wikipedia.org',
  'ukwikibooks': 'uk.wikibooks.org',
  'ukwikimedia': 'uk.wikimedia.org',
  'ukwikinews': 'uk.wikinews.org',
  'ukwikiquote': 'uk.wikiquote.org',
  'ukwikisource': 'uk.wikisource.org',
  'ukwikivoyage': 'uk.wikivoyage.org',
  'ukwiktionary': 'uk.wiktionary.org',
  'urwiki': 'ur.wikipedia.org',
  'urwikibooks': 'ur.wikibooks.org',
  'urwikiquote': 'ur.wikiquote.org',
  'urwiktionary': 'ur.wiktionary.org',
  'uzwiki': 'uz.wikipedia.org',
  'uzwikibooks': 'uz.wikibooks.org',
  'uzwikiquote': 'uz.wikiquote.org',
  'uzwiktionary': 'uz.wiktionary.org',
  'vecwiki': 'vec.wikipedia.org',
  'vecwikisource': 'vec.wikisource.org',
  'vecwiktionary': 'vec.wiktionary.org',
  'vepwiki': 'vep.wikipedia.org',
  'vewiki': 've.wikipedia.org',
  'viwiki': 'vi.wikipedia.org',
  'viwikibooks': 'vi.wikibooks.org',
  'viwikiquote': 'vi.wikiquote.org',
  'viwikisource': 'vi.wikisource.org',
  'viwikivoyage': 'vi.wikivoyage.org',
  'viwiktionary': 'vi.wiktionary.org',
  'vlswiki': 'vls.wikipedia.org',
  'vowiki': 'vo.wikipedia.org',
  'vowikibooks': 'vo.wikibooks.org',
  'vowikiquote': 'vo.wikiquote.org',
  'vowiktionary': 'vo.wiktionary.org',
  'warwiki': 'war.wikipedia.org',
  'wawiki': 'wa.wikipedia.org',
  'wawikibooks': 'wa.wikibooks.org',
  'wawiktionary': 'wa.wiktionary.org',
  'wbwikimedia': 'wb.wikimedia.org',
  'wg_enwiki': 'wg-en.wikipedia.org',
  'wikidatawiki': 'wikidata.org',
  'wowiki': 'wo.wikipedia.org',
  'wowikiquote': 'wo.wikiquote.org',
  'wowiktionary': 'wo.wiktionary.org',
  'wuuwiki': 'wuu.wikipedia.org',
  'xalwiki': 'xal.wikipedia.org',
  'xhwiki': 'xh.wikipedia.org',
  'xhwikibooks': 'xh.wikibooks.org',
  'xhwiktionary': 'xh.wiktionary.org',
  'xmfwiki': 'xmf.wikipedia.org',
  'yiwiki': 'yi.wikipedia.org',
  'yiwikisource': 'yi.wikisource.org',
  'yiwiktionary': 'yi.wiktionary.org',
  'yowiki': 'yo.wikipedia.org',
  'yowikibooks': 'yo.wikibooks.org',
  'yowiktionary': 'yo.wiktionary.org',
  'zawiki': 'za.wikipedia.org',
  'zawikibooks': 'za.wikibooks.org',
  'zawikiquote': 'za.wikiquote.org',
  'zawiktionary': 'za.wiktionary.org',
  'zeawiki': 'zea.wikipedia.org',
  'zh_classicalwiki': 'zh-classical.wikipedia.org',
  'zh_min_nanwiki': 'zh-min-nan.wikipedia.org',
  'zh_min_nanwikibooks': 'zh-min-nan.wikibooks.org',
  'zh_min_nanwikiquote': 'zh-min-nan.wikiquote.org',
  'zh_min_nanwikisource': 'zh-min-nan.wikisource.org',
  'zh_min_nanwiktionary': 'zh-min-nan.wiktionary.org',
  'zh_yuewiki': 'zh-yue.wikipedia.org',
  'zhwiki': 'zh.wikipedia.org',
  'zhwikibooks': 'zh.wikibooks.org',
  'zhwikinews': 'zh.wikinews.org',
  'zhwikiquote': 'zh.wikiquote.org',
  'zhwikisource': 'zh.wikisource.org',
  'zhwikivoyage': 'zh.wikivoyage.org',
  'zhwikiversity': 'zh.wikiversity.org',
  'zhwiktionary': 'zh.wiktionary.org',
  'zuwiki': 'zu.wikipedia.org',
  'zuwikibooks': 'zu.wikibooks.org',
  'zuwiktionary': 'zu.wiktionary.org'
};

module.exports = siteMap;
