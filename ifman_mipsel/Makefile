#
# Copyright (C) 2006-2016 OpenWrt.org
#
# This is free software, licensed under the GNU General Public License v2.
# See /LICENSE for more information.
#

include $(TOPDIR)/rules.mk

PKG_NAME:=ifman_mipsel
PKG_VERSION:=v1.2
PKG_RELEASE:=1

PKG_BUILD_DIR:=$(BUILD_DIR)/$(PKG_NAME)-$(PKG_VERSION)

include $(INCLUDE_DIR)/package.mk

define Package/ifman_mipsel
  SECTION:=net
  CATEGORY:=XUEGAONET
  TITLE:=Ifman_mipsel
  MAINTAINER:=Harris <i@xuegaogg.com>
  URL:=https://blog.xuegaogg.com/
  DEPENDS:=+libc +ethtool
endef

define Package/ifman_mipsel/description
	XUEGAONET Interface manager
endef

define Package/ifman_mipsel/install
	# install executeable binary
	$(INSTALL_DIR) $(1)/bin
	$(INSTALL_BIN) ./files/ifman_mipsle_semf $(1)/bin/ifman
	
	# install init.d
	$(INSTALL_DIR) $(1)/etc/init.d
	$(INSTALL_BIN) ./files/ifman $(1)/etc/init.d
	
	# install config
	$(INSTALL_DIR) $(1)/etc/ifman
	$(INSTALL_CONF) ./files/config.sample.yaml $(1)/etc/ifman/config.yaml
endef

define Build/Compile
	true
endef

$(eval $(call BuildPackage,ifman_mipsel))


