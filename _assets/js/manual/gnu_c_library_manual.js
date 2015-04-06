var tocUrl = '/js/manual/gnu_c_library_toc.json';

/**
 * Takes a list of any type (e.g. ul, ol) and generates a table of contents
 * from it.
 * @param  {list}  rawTOC A list containing sections of the manual.
 * @param  {array} toc    An array where the table of contents will be stored.
 * @return {array}        The same array that was passed in in the parameters.
 */
parseTOC = function(rawTOC, toc) {
  if (!toc) { toc = []; } // Create toc array if non was passed.
  $(rawTOC).children('li').each(function(i) {
    toc.push($.fn.manual.parseTOCItem(this));
  });
  return toc;
};

/**
 * Creates a chapter object from the list item provided. The list item (li)
 * must have a link inside (a). The title and chapter name will be obtained
 * from here. If the list item also contains a list (e.g. ul, ol) then that
 * list will be parsed and set as subsections to this chapter.
 * @param  {item}   listItem The list item to be parsed.
 * @return {object}          The chapter object created from the list item.
 */
parseTOCItem = function(listItem) {
  var $listItem = $(listItem);
  var $itemLink = $($listItem.children('a').get(0));
  var chapter = {
    src: $itemLink.attr('href'),
    title: $itemLink.html(),
    subsections: []
  };
  var subsectionList = $listItem.children('ul, ol');
  if (subsectionList.length > 0) {
    $.fn.manual.parseTOC(subsectionList, chapter.subsections);
  } else { chapter.subsections = null; }
  return chapter;
};
