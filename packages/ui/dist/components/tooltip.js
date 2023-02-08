module.exports = {"[data-n-tooltip]":{"position":"relative"},"[data-n-tooltip]:after":{"bottom":"100%","content":"attr(data-n-tooltip)","boxSizing":"border-box","fontStyle":"normal","textAlign":"center","paddingInline":"1ch","paddingBlock":"0.75ch","fontSize":"11.67px","lineHeight":"1.5","borderRadius":"0.5rem","color":"#fff","transition":["opacity 0.3s cubic-bezier(0.73, 0.01, 0, 1)","opacity 0.3s cubic-bezier(0.73, 0.01, 0, 1),\n    transform 0.3s cubic-bezier(0.73, 0.01, 0, 1)"],"pointerEvents":"none","zIndex":"100000","whiteSpace":"nowrap","transform":"translate(-50%, 12px)","maxWidth":"320px","textOverflow":"ellipsis","overflow":"hidden","background":"#101828"},"[data-n-tooltip]:after,\n[data-n-tooltip]:before":{"position":"absolute","left":"50%","opacity":"0","WebkitBackfaceVisibility":"hidden","backfaceVisibility":"hidden"},"[data-n-tooltip]:before":{"top":"-2px","borderStyle":"solid","borderTopWidth":"4px","borderRightWidth":"4px","borderBottomWidth":["4px","0"],"borderLeftWidth":"4px","content":"''","width":"0","height":"0","transform":"translate(-50%, calc(-50% - 6px))","transition":["opacity 0.1s cubic-bezier(0.73, 0.01, 0, 1) 0s","opacity 0.1s cubic-bezier(0.73, 0.01, 0, 1) 0s,\n    transform 0.6s cubic-bezier(0.73, 0.01, 0, 1) 0s"],"zIndex":"110000","borderTopColor":"#101828","borderRightColor":"transparent","borderBottomColor":"transparent","borderLeftColor":"transparent"},"[data-n-tooltip][data-n-tooltip-config*='right']:before":{"borderTopColor":"transparent","borderRightColor":"#101828","borderBottomColor":"transparent","borderLeftColor":"transparent","top":"50%","right":"-6px","left":"auto","borderStyle":"solid","borderTopWidth":"4px","borderRightWidth":"4px","borderBottomWidth":"4px","borderLeftWidth":["4px","0"],"transform":"translate(calc(-50% + 7px), -50%)"},"[data-n-tooltip][data-n-tooltip-config*='bottom']:before":{"borderTopColor":"transparent","borderRightColor":"transparent","borderBottomColor":"#101828","borderLeftColor":"transparent","top":"auto","bottom":"-6px","left":"50%","borderStyle":"solid","borderTopWidth":["4px","0"],"borderRightWidth":"4px","borderBottomWidth":"4px","borderLeftWidth":"4px","transform":"translate(-50%, calc(-50% + 6px))"},"[data-n-tooltip][data-n-tooltip-config*='left']:before":{"borderTopColor":"transparent","borderRightColor":"transparent","borderBottomColor":"transparent","borderLeftColor":"#101828","top":"50%","left":"-2px","borderStyle":"solid","borderTopWidth":"4px","borderRightWidth":["4px","0"],"borderBottomWidth":"4px","borderLeftWidth":"4px","width":"0","height":"0","transform":"translate(calc(-50% - 8px), -50%)"},"[data-n-tooltip]:focus:after,\n[data-n-tooltip]:focus:before,\n[data-n-tooltip]:hover:after,\n[data-n-tooltip]:hover:before":{"opacity":"1"},"[data-n-tooltip]:focus:before,\n[data-n-tooltip]:hover:before":{"transition":["opacity 0.1s cubic-bezier(0.73, 0.01, 0, 1) 0.1s","opacity 0.1s cubic-bezier(0.73, 0.01, 0, 1) 0.1s,\n    transform 0.6s cubic-bezier(0.73, 0.01, 0, 1) 0.1s"],"transform":"translate(-50%, calc(-50% - 2px))"},"[data-n-tooltip]:focus:after,\n[data-n-tooltip]:hover:after":{"transform":"translate(-50%, -6px)"},"[data-n-tooltip][data-n-tooltip-config*='right']:after":{"top":"50%","bottom":"auto","left":"100%","transform":"translate(-12px, -50%)"},"[data-n-tooltip][data-n-tooltip-config*='right']:focus:before,\n[data-n-tooltip][data-n-tooltip-config*='right']:hover:before":{"transform":"translate(calc(-50% + 3px), -50%)"},"[data-n-tooltip][data-n-tooltip-config*='right']:focus:after,\n[data-n-tooltip][data-n-tooltip-config*='right']:hover:after":{"transform":"translate(7px, -50%)"},"[data-n-tooltip][data-n-tooltip-config*='bottom']:after":{"top":"100%","bottom":"auto","left":"50%","transform":"translate(-50%, -12px)"},"[data-n-tooltip][data-n-tooltip-config*='bottom']:focus:before,\n[data-n-tooltip][data-n-tooltip-config*='bottom']:hover:before":{"transform":"translate(-50%, calc(-50% + 2px))"},"[data-n-tooltip][data-n-tooltip-config*='bottom']:focus:after,\n[data-n-tooltip][data-n-tooltip-config*='bottom']:hover:after":{"transform":"translate(-50%, 6px)"},"[data-n-tooltip][data-n-tooltip-config*='left']:after":{"top":"50%","right":"100%","bottom":"auto","left":"auto","transform":"translate(12px, -50%)"},"[data-n-tooltip][data-n-tooltip-config*='left']:focus:after,\n[data-n-tooltip][data-n-tooltip-config*='left']:hover:after":{"transform":"translate(-7px, -50%)"},"[data-n-tooltip][data-n-tooltip-config*='left']:focus:before,\n[data-n-tooltip][data-n-tooltip-config*='left']:hover:before":{"transform":"translate(calc(-50% - 3px), -50%)"},"[data-n-tooltip][data-n-tooltip-config*='multiline']:after":{"wordBreak":"break-word","whiteSpace":"normal","minWidth":"180px","textOverflow":"clip"},"[data-n-tooltip][data-n-tooltip-config*='delay']:before":{"transition":["opacity 0.2s cubic-bezier(0.73, 0.01, 0, 1) 0s","opacity 0.2s cubic-bezier(0.73, 0.01, 0, 1) 0s,\n    transform 0.3s cubic-bezier(0.73, 0.01, 0, 1) 0s"]},"[data-n-tooltip][data-n-tooltip-config*='delay']:after":{"transition":["opacity 0.3s cubic-bezier(0.73, 0.01, 0, 1) 0s","opacity 0.3s cubic-bezier(0.73, 0.01, 0, 1) 0s,\n    transform 0.3s cubic-bezier(0.73, 0.01, 0, 1) 0s"]},"[data-n-tooltip][data-n-tooltip-config*='delay']:focus:before,\n[data-n-tooltip][data-n-tooltip-config*='delay']:hover:before":{"transition":["opacity 0.2s cubic-bezier(0.73, 0.01, 0, 1) 0.5s","opacity 0.2s cubic-bezier(0.73, 0.01, 0, 1) 0.5s,\n    transform 0.6s cubic-bezier(0.73, 0.01, 0, 1) 0.5s"]},"[data-n-tooltip][data-n-tooltip-config*='delay']:focus:after,\n[data-n-tooltip][data-n-tooltip-config*='delay']:hover:after":{"transition":["opacity 0.3s cubic-bezier(0.73, 0.01, 0, 1) 0.4s","opacity 0.3s cubic-bezier(0.73, 0.01, 0, 1) 0.4s,\n    transform 0.3s cubic-bezier(0.73, 0.01, 0, 1) 0.4s"]},"[data-n-tooltip][data-n-tooltip-config*='shadow']:after":{"boxShadow":"0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)"},"[data-n-tooltip][data-n-tooltip-config*='no-animation']:after,\n[data-n-tooltip][data-n-tooltip-config*='no-animation']:before":{"transition":"none"},"[data-n-tooltip][data-n-tooltip-config*='no-arrow']:before":{"display":"none"},"[data-n-tooltip][data-n-tooltip-config*='square']:after":{"borderRadius":"0"},"[data-n-tooltip][data-n-tooltip-config*='invert']:after":{"color":"#1D2939","background":"#fff"},"[data-n-tooltip][data-n-tooltip-config*='invert']:before":{"borderTopColor":"#fff","borderRightColor":"transparent","borderBottomColor":"transparent","borderLeftColor":"transparent"},"[data-n-tooltip][data-n-tooltip-config*='invert'][data-n-tooltip-config*='right']:before":{"borderTopColor":"transparent","borderRightColor":"#fff","borderBottomColor":"transparent","borderLeftColor":"transparent"},"[data-n-tooltip][data-n-tooltip-config*='invert'][data-n-tooltip-config*='bottom']:before":{"borderTopColor":"transparent","borderRightColor":"transparent","borderBottomColor":"#fff","borderLeftColor":"transparent"},"[data-n-tooltip][data-n-tooltip-config*='invert'][data-n-tooltip-config*='left']:before":{"borderTopColor":"transparent","borderRightColor":"transparent","borderBottomColor":"transparent","borderLeftColor":"#fff"},"[data-n-tooltip][data-n-tooltip-config*='success']:after":{"background":"#00944E"},"[data-n-tooltip][data-n-tooltip-config*='success']:before":{"borderTopColor":"#00944E","borderRightColor":"transparent","borderBottomColor":"transparent","borderLeftColor":"transparent"},"[data-n-tooltip][data-n-tooltip-config*='success'][data-n-tooltip-config*='right']:before":{"borderTopColor":"transparent","borderRightColor":"#00944E","borderBottomColor":"transparent","borderLeftColor":"transparent"},"[data-n-tooltip][data-n-tooltip-config*='success'][data-n-tooltip-config*='bottom']:before":{"borderTopColor":"transparent","borderRightColor":"transparent","borderBottomColor":"#00944E","borderLeftColor":"transparent"},"[data-n-tooltip][data-n-tooltip-config*='success'][data-n-tooltip-config*='left']:before":{"borderTopColor":"transparent","borderRightColor":"transparent","borderBottomColor":"transparent","borderLeftColor":"#00944E"},"[data-n-tooltip][data-n-tooltip-config*='info']:after":{"background":"#086AEC"},"[data-n-tooltip][data-n-tooltip-config*='info']:before":{"borderTopColor":"#086AEC","borderRightColor":"transparent","borderBottomColor":"transparent","borderLeftColor":"transparent"},"[data-n-tooltip][data-n-tooltip-config*='info'][data-n-tooltip-config*='right']:before":{"borderTopColor":"transparent","borderRightColor":"#086AEC","borderBottomColor":"transparent","borderLeftColor":"transparent"},"[data-n-tooltip][data-n-tooltip-config*='info'][data-n-tooltip-config*='bottom']:before":{"borderTopColor":"transparent","borderRightColor":"transparent","borderBottomColor":"#086AEC","borderLeftColor":"transparent"},"[data-n-tooltip][data-n-tooltip-config*='info'][data-n-tooltip-config*='left']:before":{"borderTopColor":"transparent","borderRightColor":"transparent","borderBottomColor":"transparent","borderLeftColor":"#086AEC"},"[data-n-tooltip][data-n-tooltip-config*='warning']:after":{"background":"#E98B00"},"[data-n-tooltip][data-n-tooltip-config*='warning']:before":{"borderTopColor":"#E98B00","borderRightColor":"transparent","borderBottomColor":"transparent","borderLeftColor":"transparent"},"[data-n-tooltip][data-n-tooltip-config*='warning'][data-n-tooltip-config*='right']:before":{"borderTopColor":"transparent","borderRightColor":"#E98B00","borderBottomColor":"transparent","borderLeftColor":"transparent"},"[data-n-tooltip][data-n-tooltip-config*='warning'][data-n-tooltip-config*='bottom']:before":{"borderTopColor":"transparent","borderRightColor":"transparent","borderBottomColor":"#E98B00","borderLeftColor":"transparent"},"[data-n-tooltip][data-n-tooltip-config*='warning'][data-n-tooltip-config*='left']:before":{"borderTopColor":"transparent","borderRightColor":"transparent","borderBottomColor":"transparent","borderLeftColor":"#E98B00"},"[data-n-tooltip][data-n-tooltip-config*='danger']:after":{"background":"#EA240E"},"[data-n-tooltip][data-n-tooltip-config*='danger']:before":{"borderTopColor":"#EA240E","borderRightColor":"transparent","borderBottomColor":"transparent","borderLeftColor":"transparent"},"[data-n-tooltip][data-n-tooltip-config*='danger'][data-n-tooltip-config*='right']:before":{"borderTopColor":"transparent","borderRightColor":"#EA240E","borderBottomColor":"transparent","borderLeftColor":"transparent"},"[data-n-tooltip][data-n-tooltip-config*='danger'][data-n-tooltip-config*='bottom']:before":{"borderTopColor":"transparent","borderRightColor":"transparent","borderBottomColor":"#EA240E","borderLeftColor":"transparent"},"[data-n-tooltip][data-n-tooltip-config*='danger'][data-n-tooltip-config*='left']:before":{"borderTopColor":"transparent","borderRightColor":"transparent","borderBottomColor":"transparent","borderLeftColor":"#EA240E"},"[data-n-tooltip][data-n-tooltip='']:after,\n[data-n-tooltip][data-n-tooltip='']:before":{"display":"none"}};