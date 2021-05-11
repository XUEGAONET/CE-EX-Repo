#
# Copyright (C) 2006-2016 OpenWrt.org
#
# This is free software, licensed under the GNU General Public License v2.
# See /LICENSE for more information.
#

include $(TOPDIR)/rules.mk

PKG_NAME:=ifman_arm32
PKG_VERSION:=v1.1
PKG_RELEASE:=1

PKG_BUILD_DIR:=$(BUILD_DIR)/$(PKG_NAME)-$(PKG_VERSION)

include $(INCLUDE_DIR)/package.mk

define Package/ifman_arm32
  SECTION:=net
  CATEGORY:=XUEGAONET
  TITLE:=Ifman_arm32
  MAINTAINER:=Harris <i@xuegaogg.com>
  URL:=https://blog.xuegaogg.com/
  DEPENDS:=+libc +ethtool
endef

define Package/ifman_arm32/description
	XUEGAONET Interface manager
endef

define Package/ifman_arm32/install
	mkdir $(1)/etc/ifman -p
	mkdir $(1)/bin -p
	mkdir $(1)/etc/init.d -p
	$(INSTALL_BIN) ./files/config.sample.yaml $(1)/etc/ifman/config.yaml
	$(INSTALL_BIN) ./files/ifman $(1)/etc/init.d
	$(INSTALL_BIN) ./files/ifman_arm32 $(1)/bin/ifman
	chmod 0600 $(1)/etc/ifman/config.yaml
	chmod a+x $(1)/bin/ifman
	chmod a+x $(1)/etc/init.d/ifman
endef

define Build/Compile
	true
endef

$(eval $(call BuildPackage,ifman_arm32))


