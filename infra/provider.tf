provider "azurerm" {
  features {}
  skip_provider_registration = true
  subscription_id            = "c6dd8e77-6e8a-4de1-8b4d-7d15d57dbb71"
}

terraform {
  required_version = ">= 1.4.0"

  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 4.38.0"
    }
  }

  backend "azurerm" {
    resource_group_name  = "tfstate3-rg"
    storage_account_name = "vithutfstateaccunt" # double check this name
    container_name       = "tfstate"
    key                  = "aks-infra.tfstate"
  }
}

