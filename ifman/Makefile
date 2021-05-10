#
# Copyright (C) 2006-2016 OpenWrt.org
#
# This is free software, licensed under the GNU General Public License v2.
# See /LICENSE for more information.
#

include $(TOPDIR)/rules.mk

PKG_NAME:=ifman_arm32
PKG_VERSION:=v1.0.2
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
    mkdir /etc/ifman -p
    
    $(INSTALL_BIN) ./files/config.sample.yaml $(1)/etc/ifman/config.yaml
    $(INSTALL_BIN) ./files/ifman.init $(1)/etc/init.d
    $(INSTALL_BIN) ./files/ifman_arm32 $(1)/bin/ifman
    
    chmod a+x /bin/ifman
    chmod a+x /etc/init.d/ifman.init
endef

$(eval $(call BuildPackage,ifman_arm32))


