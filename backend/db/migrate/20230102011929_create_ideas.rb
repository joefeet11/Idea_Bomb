class CreateIdeas < ActiveRecord::Migration[6.1]
  def change
    create_table :ideas do |t|
      t.string :detail
      t.belongs_to :user, foregin_key: true 

      t.timestamps
    end
  end
end
