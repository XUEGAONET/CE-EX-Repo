#
# Copyright (C) 2006-2016 OpenWrt.org
#
# This is free software, licensed under the GNU General Public License v2.
# See /LICENSE for more information.
#

include $(TOPDIR)/rules.mk

PKG_NAME:=base-config
PKG_VERSION:=v1.0
PKG_RELEASE:=1

PKG_BUILD_DIR:=$(BUILD_DIR)/$(PKG_NAME)-$(PKG_VERSION)

include $(INCLUDE_DIR)/package.mk

define Package/base-config
  SECTION:=net
  CATEGORY:=XUEGAONET
  TITLE:=Base Config
  MAINTAINER:=Harris <i@xuegaogg.com>
  URL:=https://blog.xuegaogg.com/
endef

define Package/base-config/description
	XUEGAONET Base Pre-config
endef

define Package/base-config/install
	# install op config
	$(INSTALL_DIR) $(1)/etc/config
	$(INSTALL_CONF) ./files/system $(1)/etc/config
	$(INSTALL_CONF) ./files/dhcp $(1)/etc/config
	$(INSTALL_CONF) ./files/fstab $(1)/etc/config
	
	# install sysctl.conf
	$(INSTALL_DIR) $(1)/etc/sysctl.d
	$(INSTALL_CONF) ./files/sysctl.conf $(1)/etc/sysctl.d/13-xgn-ce.conf
	
	# install nginx.conf
	$(INSTALL_DIR) $(1)/etc/nginx
	$(INSTALL_BIN) ./files/nginx.conf $(1)/etc/nginx
endef

define Build/Compile
	true
endef

$(eval $(call BuildPackage,base-config))


