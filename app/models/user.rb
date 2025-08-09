class User < ApplicationRecord
  validates_uniqueness_of :username, :email, case_sensitive: false

  def setup_complete?
    username.present?
  end
end
