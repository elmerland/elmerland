
if (!$.gnu_manual) { $.gnu_manual = {}; }
$.gnu_manual.url_prefix = '/gnu_formatted/';

$(document).ready(function() {
  if (!$.gnu_manual.toc) {
    var list = $('.contents').children('ul');
    $.gnu_manual.toc = [];
    extractData(list, $.gnu_manual.toc);
    // console.log($.gnu_manual.toc);
  } else {
    // console.log($.gnu_manual.toc);
  }

  setup();
  $('.main-list-item').fitText(2.0, {minFontSize: '14px'});
  $('.main-list-item').click(function(e) {
    var idx = parseInt($(this).attr('data-index'));
    $('.gnu-manual .section-wrapper').html('');
    setSectionContent($('.gnu-manual .section-wrapper'), $.gnu_manual.toc[idx]);
  });
  setSectionContent($('.gnu-manual .section-wrapper'), $.gnu_manual.toc[0]);
});

function extractData(list, content) {
  if (!list) { return; }
  $(list).children('li').each(function(i, e) {
    var newItem = {};
    var link = $(e).children('a')
    newItem.href = link.attr('href');
    newItem.name = link.html();
    newItem.list = [];
    extractData($(e).children('ul'), newItem.list);
    if (newItem.list.length == 0) { newItem.list = null; }
    content.push(newItem);
  });
}

function setup() {
  $('.gnu-manual .list-level').append('<ul></ul>')
  var list = $('.gnu-manual .list-level ul').addClass('main-list');
  $.each($.gnu_manual.toc, function(i, elem) {
    var item = $('<li></li>');
    item.append(elem.name);
    item.addClass('main-list-item');
    item.attr('data-index', i);
    $(list).append(item);
  });
}

function setSectionContent(container, item, isSubItem, depth) {
  var sectionContent;
  if (isSubItem) {
    var subItem = $('<div/>').addClass('sub-section-item').addClass('level-' + depth);
    subItem.append($('<i/>').addClass('fa').addClass('fa-caret-right'));
    subItem.append(item.name);
    subItem.click(subItemClick);
    sectionContent = $('<div/>').addClass('sub-section-content').css({'display': 'none'});
    // subContent.append(data);
    $(container).append(subItem).append(sectionContent);
    if (depth > 1) {
      $(container).css({'display': 'none'});
    }
  } else {
    sectionContent = $('<div/>').addClass('section-content');
    $(container).append(sectionContent);
  }

  // Make AJAX call to get section content
  var url = $.gnu_manual.url_prefix + item.href;
  $.get(url, setItemContent(sectionContent));

  // Create subsection accordion
  if (item.list && item.list.length > 0) {
    var subSection = $('<div/>').addClass('sub-section-wrapper');
    $(container).append(subSection);
    $.each(item.list, function(i, elem) {
      setSectionContent(subSection, elem, true, depth ? depth + 1 : 1);
    });
  }
}

function setItemContent(container) {
  return function(data, textStatus, jqXHR) {
    $(container).html(data);
    $(container).find('a').click(handleContentClick);
  }
}

function handleContentClick(event) {
  event.preventDefault();
  var target = $(this).attr('href');
  var path = [];
  getItemPath($.gnu_manual.toc, target, path);
  $('.gnu-manual .section-wrapper').html('');
  setSectionContent($('.gnu-manual .section-wrapper'), $.gnu_manual.toc[path[0]]);
  showSection(path);
  anchor = target.split('#')[1];
  console.log(anchor);
}

function subItemClick(event) {
  $(this).children('.fa').toggleClass('fa-caret-right').toggleClass('fa-caret-down');
  var tmp = $(this).next('.sub-section-content').slideToggle();
  $(tmp).next('.sub-section-wrapper').slideToggle();
}

function getItemPath(list, target, path) {
  var foundIt = false;
  if (!list || list.length === 0) { return foundIt; }
  $.each(list, function(i, elem) {
    if (elem.href === target) {
      path.unshift(i);
      foundIt = true;
      return false;
    } else if (getItemPath(elem.list, target, path)) {
      path.unshift(i);
      foundIt = true;
      return false;
    }
  });
  return foundIt;
}

function showSection(path) {
  path.shift();
  var wrapper = $('.gnu-manual .section-wrapper .sub-section-wrapper');
  $.each(path, function(i, num) {
    var item = $(wrapper).children('.sub-section-item').get(num);
    $(item).trigger('click');
    wrapper = $(item).next().next();
  })
}


