var tooltipTriggerListTooltip = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipListTooltip = tooltipTriggerListTooltip.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

const tooltipTriggerListPopover = document.querySelectorAll('[data-bs-toggle="popover"]')
const tooltipListPopover = [...tooltipTriggerListPopover].map(tooltipTriggerEl => new bootstrap.Popover(tooltipTriggerEl, {
    trigger: 'focus'
}))

var popover2 = new bootstrap.Popover(document.querySelector('.example-popover'), {
    container: 'body'
})

var popoverTriggerList3 = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover3"]'))
var popoverList3 = popoverTriggerList3.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

var popoverTriggerList4 = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover4"]'))
var popoverList4 = popoverTriggerList4.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})
